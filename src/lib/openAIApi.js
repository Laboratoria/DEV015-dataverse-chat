// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (messages) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  const apiKey = getApiKey();  // Obtén la API Key desde Local Storage

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}` // Usa la API Key en el encabezado de autorización
    },
    body: JSON.stringify({
      model: "gpt-4", // Especifica el modelo de OpenAI
      messages: messages // Pasa los mensajes al cuerpo de la solicitud
    })
  });

  if (!response.ok) {
    throw new Error('Error al comunicarse con OpenAI');
  }

  const data = await response.json();
  return data.choices[0].message.content; // Devuelve la respuesta de OpenAI
};