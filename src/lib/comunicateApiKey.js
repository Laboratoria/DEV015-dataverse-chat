import axios from 'axios';
import { getApiKey } from './apiKey.js';

// Función para comunicarte con la API
export const communicateWithApi = async (messages) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: messages.prompt,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${getApiKey()}`
      }
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error en la comunicación con la API:', error);
    throw error;
  }
};
