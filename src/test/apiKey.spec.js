import { getApiKey, setApiKey } from '../lib/apiKey.js';

describe('API Key Storage', () => {
  beforeEach(() => {
    // Limpia el localStorage antes de cada prueba
    localStorage.clear();
  });

  test('should save the API key to localStorage', () => {
    const apiKey = 'test-api-key';
    setApiKey(apiKey);
    expect(localStorage.getItem('apiKey')).toBe(apiKey);
  });

  test('should retrieve the API key from localStorage', () => {
    const apiKey = 'test-api-key';
    localStorage.setItem('apiKey', apiKey);
    expect(getApiKey()).toBe(apiKey);
  });

  test('should return null if API key is not set', () => {
    expect(getApiKey()).toBe(null);
  });
});
