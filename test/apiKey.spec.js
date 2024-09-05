/* eslint-disable indent */
// test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('debería devolver el valor de la API Key', () => {
    const key = "abcd";
    localStorage.setItem("APIKEY", key);
    const apiKey = getApiKey();
    expect(apiKey).toBe(key);
  });
});

describe('setApiKey', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('debería establecer correctamente la API Key', () => {
  const key = "abcd";
   setApiKey(key);
   expect(localStorage.getItem('apiKey')).toBe(key);
  });
});