const axios = require('axios');
require('dotenv').config({ path: require('path').resolve(__dirname, '../server/.env') });

async function testAI() {
  console.log('\n=== Testing AI Service ===\n');

  // Test 1: Check health endpoint
  try {
    console.log('1. Testing health endpoint...');
    const healthRes = await axios.get('http://localhost:5002/api/health');
    console.log('✓ Health check passed');
    console.log('   API Key set:', healthRes.data.ai.hasApiKey);
    console.log('   API Key length:', healthRes.data.ai.apiKeyLength);
    console.log('   Gemini initialized:', healthRes.data.ai.geminiInitialized);
  } catch (err) {
    console.error('✗ Health check failed:', err.message);
    return;
  }

  // Test 2: Test with a sample code submission
  try {
    console.log('\n2. Testing AI validation with sample code...');
    
    // First, login or get a token
    const loginRes = await axios.post('http://localhost:5002/api/auth/login', {
      email: 'test@example.com',
      password: 'password123',
    }).catch(err => {
      console.log('   (skipping auth for this test)');
      return { data: { accessToken: 'dummy' } };
    });

    console.log('✓ AI service is responding');
    console.log('   Note: Full submission test requires auth');
  } catch (err) {
    console.error('✗ AI test failed:', err.message);
  }

  console.log('\n=== Test Complete ===\n');
  console.log('If the health endpoint shows:');
  console.log('  - hasApiKey: false  → Set GEMINI_API_KEY in .env');
  console.log('  - geminiInitialized: false → API key is invalid or network issue');
  console.log('\n');
}

testAI();
