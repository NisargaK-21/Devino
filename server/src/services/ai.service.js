const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize with API key validation
let genAI;
try {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in environment variables');
  }
  genAI = new GoogleGenerativeAI(apiKey);
} catch (error) {
  console.error('Failed to initialize Gemini API:', error.message);
}

function buildPrompt({ codeSnippet, stage, projectContext, requirements = [], expectedOutput = '' }) {
  const requirementBullet = requirements.map((req, i) => `${i + 1}. ${req}`).join('\n');
  const prompt = `You are a secure code validation assistant for an educational full-stack project.

Stage: ${stage}
Project Context: ${JSON.stringify(projectContext)}

Requirements:
${requirementBullet || '- No special requirements provided -'}

Expected Output:
${expectedOutput || '- No expected output provided -'}

Code:

${codeSnippet}

Return ONLY valid JSON (no markdown), with this exact shape:
{
  "approved": true | false,
  "score": 0-100,
  "feedback": "Actionable feedback summary",
  "errors": [{"rule": "..", "message": ".."}],
  "warnings": [{"rule": "..", "message": ".."}],
  "suggestions": [".."],
  "model": "gemini-1.5-flash",
  "promptHash": "<sha256>"
}
`;
  return prompt;
}

async function callGemini(prompt) {
  try {
    if (!genAI) {
      throw new Error('Gemini API not initialized. Check GEMINI_API_KEY configuration.');
    }
    
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    
    if (!result || !result.response) {
      throw new Error('Invalid response from Gemini API');
    }
    
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error('Empty response from Gemini API');
    }
    
    return text;
  } catch (error) {
    console.error('Error calling Gemini API:', {
      message: error.message,
      code: error.code,
      status: error.status,
    });
    throw new Error(`Gemini API error: ${error.message}`);
  }
}

function safeJSONParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function normalizeResult(parsed, raw) {
  if (!parsed || typeof parsed !== 'object') {
    return {
      approved: false,
      score: 0,
      feedback: 'AI response could not be parsed to JSON. Please retry.',
      errors: [{ rule: 'parse_error', message: 'Could not parse AI response' }],
      warnings: [],
      suggestions: ['Resubmit code or contact support.'],
      model: 'gemini-1.5-flash',
      promptHash: null,
      rawResponse: raw,
    };
  }

  const approved = Boolean(parsed.approved);
  const score = Number(parsed.score || 0);

  return {
    approved,
    score: Math.max(0, Math.min(100, isNaN(score) ? 0 : score)),
    feedback: parsed.feedback || (approved ? 'Looks good.' : 'Not approved yet.'),
    errors: Array.isArray(parsed.errors) ? parsed.errors : [],
    warnings: Array.isArray(parsed.warnings) ? parsed.warnings : [],
    suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : [],
    model: parsed.model || 'gemini-1.5-flash',
    promptHash: parsed.promptHash || null,
    rawResponse: parsed,
  };
}

function computePromptHash(data) {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
}

async function analyzeCode(payload) {
  const prompt = buildPrompt(payload);
  let retries = 2;
  let lastError;
  
  while (retries > 0) {
    try {
      const rawResponse = await callGemini(prompt);
      const parsed = safeJSONParse(rawResponse);

      const normalized = normalizeResult(parsed, rawResponse);
      normalized.promptHash = normalized.promptHash || computePromptHash(payload);
      normalized.rawResponse = normalized.rawResponse || rawResponse;
      return normalized;
    } catch (error) {
      lastError = error;
      retries--;
      if (retries > 0) {
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Retrying analyzeCode... (${retries} attempts left)`);
      }
    }
  }
  
  console.error('analyzeCode failed after retries:', lastError?.message);
  return {
    approved: false,
    score: 0,
    feedback: lastError?.message?.includes('GEMINI_API_KEY') 
      ? 'API key configuration error. Contact support.' 
      : 'AI validation failed; please retry your submission.',
    errors: [{ 
      rule: 'ai_failure', 
      message: lastError?.message || 'Unknown error' 
    }],
    warnings: [],
    suggestions: ['Retry code submission or contact support if issue persists.'],
    model: 'gemini-1.5-flash',
    promptHash: computePromptHash(payload),
    rawResponse: {},
  };
}

module.exports = { analyzeCode, validateApiConfig };

// Helper function to validate API configuration
function validateApiConfig() {
  return {
    hasApiKey: !!process.env.GEMINI_API_KEY,
    apiKeyLength: process.env.GEMINI_API_KEY?.length || 0,
    geminiInitialized: !!genAI,
  };
}
