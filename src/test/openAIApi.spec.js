import { communicateWithApi } from '../lib/comunicateApiKey.js';

// Se reemplaza el modulo real de la apiKey
jest.mock('../lib/apiKey', () => ({
  getApiKey: jest.fn(() => 'mock-api-key'), // Al simular getApiKey retorna el valor de mock-api-key
}));

window.fetch = jest.fn(); 
// Agrupa las funciones de communicateWithApi
describe('communicateWithApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debería llamar a fetch con los parámetros correctos', async () => {
    // Mock de fetch para simular una respuesta exitosa de la API
    fetch.mockResolvedValueOnce({ // Resuelve el valor seleccionado
      json: jest.fn().mockResolvedValueOnce({
        choices: [
          {
            message: { content: 'Respuesta simulada' },
          },
        ],
      }),
    });

    const messages = "Hola";
    const characterId = 123;
    const name = "Sailor Moon";

    const response = await communicateWithApi(messages, characterId, name);

    // Verificar que fetch fue llamado con los parámetros correctos
    expect(fetch).toHaveBeenCalledWith(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer mock-api-key`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `Eres una sailor ${name}. Responde como si fueras ${name}.`,
            },
            {
              role: 'user',
              content: `Character ID: ${characterId}. Message: ${messages}`,
            },
          ],
          max_tokens: 150,
        }),
      }
    );

    // Verificar que la respuesta devuelta por communicateWithApi es correcta
    expect(response).toBe('Respuesta simulada');
  });

  test('debería lanzar un error si la API no devuelve opciones', async () => {
    // Mock de fetch para simular una respuesta sin choices
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ choices: [] }),
    });

    await expect(
      communicateWithApi("Hola", 123, "Sailor Moon")
    ).rejects.toThrow('No se encontraron respuestas en la respuesta de la API.');
  });

  test('should handle fetch error correctly', async () => {
    // Mock de fetch para simular un error
    fetch.mockRejectedValueOnce(new Error('Error de red'));

    await expect(
      communicateWithApi("Hola", 123, "Sailor Moon")
    ).rejects.toThrow('Error en la comunicación con la API: Error de red');
  });
});
