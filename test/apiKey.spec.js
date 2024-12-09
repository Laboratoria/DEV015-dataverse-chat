// test/apiKey.spec.js

import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe('API Key Storage', () => {
  beforeEach(() => {
    // Limpia el localStorage antes de cada prueba
    localStorage.clear();
  });
  test('debería guardar la clave de API en el localStorage', () => {
    const apiKey = 'test-api-key';
    setApiKey(apiKey);
    expect(localStorage.getItem('apiKey')).toBe(apiKey);
  });
  test('debería recuperar la clave de API del localStorage', () => {
    const apiKey = 'test-api-key';
    localStorage.setItem('apiKey', apiKey);
    expect(getApiKey()).toBe(apiKey);
  });
  test('debería devolver null si la clave de API no está establecida', () => {
    expect(getApiKey()).toBe(null);
  });
});
