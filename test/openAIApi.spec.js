import { communicateWithOpenAI } from '../src/lib/openAIApi.js';
import { getApiKey } from '../src/lib/apiKey.js';

jest.mock('../src/lib/apiKey.js', () => ({
  getApiKey: jest.fn()
}));


import data from '../src/data/dataset.js';

const game = data.item;
describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    window.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('comunicación exitosa con OpenAI', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true, 
      json: () => Promise.resolve({
        choices: [
          {
            message: {
              content: 'example response'
            }
          }
        ]
      })
    });
    getApiKey.mockReturnValue('mocked-api-key');

    const messages = [
      { role: 'user', content: 'Hola, ¿cómo estás?' }
    ];
    const response = await communicateWithOpenAI(messages);

    expect(response).toBe('example response');
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer mocked-api-key`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: messages, 
        temperature: 1, 
        max_tokens: 250
      })
    });
  });

  test('fallo en la comunicación con OpenAI por API Key ausente', async () => {
    console.error = jest.fn();
    getApiKey.mockReturnValue(null);

    try {
      await communicateWithOpenAI([{ role: 'user', content: 'Hola' }]);
    } catch (error) {
      expect(error).toEqual(new Error('API Key no está configurada'));
      expect(window.fetch).not.toHaveBeenCalled();
    }
  });

  test('fallo en la comunicación con OpenAI debido a error de red', async () => {
    console.error = jest.fn();

    window.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Internal Server Error',
      json: () => Promise.resolve({
        error: {
          message: 'Internal Server Error'
        }
      })
    });

    getApiKey.mockResolvedValue('mocked-api-key');

    try {
      await communicateWithOpenAI([{ role: 'user', content: 'Hola' }]);
    } catch (error) {
      expect(error).toEqual(new Error('Error al comunicarse con OpenAI: Internal Server Error'));
      expect(window.fetch).toHaveBeenCalledTimes(1);
    }
  });
});

