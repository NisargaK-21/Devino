import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const csrfToken = localStorage.getItem('csrfToken');
        const r = await api.post('/auth/refresh', { csrfToken });
        localStorage.setItem('accessToken', r.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${r.data.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed, logout
        localStorage.removeItem('accessToken');
        localStorage.removeItem('csrfToken');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export async function register(data) {
  return api.post('/auth/register', data);
}

export async function login(data) {
  const res = await api.post('/auth/login', data);
  if (res.data?.accessToken && res.data?.user) {
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('csrfToken', res.data.csrfToken);
    localStorage.setItem('user', JSON.stringify(res.data.user));
  }
  return res;
}

export async function logout() {
  const csrfToken = localStorage.getItem('csrfToken');
  await api.post('/auth/logout', { csrfToken });
  localStorage.removeItem('accessToken');
  localStorage.removeItem('csrfToken');
  localStorage.removeItem('user');
}

export async function getMe() {
  return api.get('/auth/me');
}

export async function listTemplates() {
  return api.get('/templates');
}

export async function listProjects() {
  return api.get('/projects');
}

export async function createProject(payload) {
  return api.post('/projects', payload);
}

export async function getProject(id) {
  return api.get(`/projects/${id}`);
}

export async function getStages() {
  return api.get('/stages');
}

export async function submitStageCode(projectId, stage, data) {
  return api.post(`/projects/${projectId}/stages/${stage}/submit`, data);
}

export async function getStageSubmissions(projectId, stage) {
  return api.get(`/projects/${projectId}/stages/${stage}/submissions`);
}

export async function retryStage(projectId, stage) {
  return api.post(`/projects/${projectId}/stages/${stage}/retry`);
}

export default api;
