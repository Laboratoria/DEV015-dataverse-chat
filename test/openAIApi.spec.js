/* eslint-disable no-undef */

import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

// Mock de la función getApiKey
jest.mock('../src/lib/apiKey', () => ({
  getApiKey: jest.fn().mockReturnValue('mock-api-key')
}));

describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    // Mock de la función global fetch
    global.fetch = jest.fn();
  });

  test('should return the expected response from OpenAI', async () => {

    // Datos de prueba
    const petsData = { name: 'Fido', description: 'un perro muy amigable' };
    const message = 'Hola, ¿cómo estás?';

    // Mock de la respuesta de la API
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        choices: [{ message: { content: 'Hola, estoy bien. ¿Y tú?' } }]
      })
    });

    const response = await communicateWithOpenAI(petsData, message);
    
    expect(response).toBe('Hola, estoy bien. ¿Y tú?');
  });
});