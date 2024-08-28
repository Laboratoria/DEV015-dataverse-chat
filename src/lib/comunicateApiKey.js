import { getApiKey } from './apiKey.js';
export const communicateWithApi = (messages, characterId) => {
  return fetch('https://api.openai.com/v1/chat/completions', { 
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getApiKey()}`,
      'Content-Type': 'application/json'
     },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: 'user', 
          content: `Character ID: ${characterId}. Message: ${messages}`
        }
      ],
      max_tokens: 150
    }),
  })
  .then(response => response.json())
  .then((data) => {
    console.log('API Response:', data); // Imprime toda la respuesta para ver qué contiene
    if (data && data.choices && data.choices.length > 0) {
      return data.choices[0].message.content.trim();
    } else {
      throw new Error('No se encontraron respuestas en la respuesta de la API.');
    }
  })
  .catch((error) => {
    console.error('Error en la comunicación con la API:', error.response ? error.response.data : error.message);
    throw error;
  });
};
