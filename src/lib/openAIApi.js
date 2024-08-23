import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (messages) => {
  try {
    const apiKey = getApiKey();  // Obtén la API Key desde Local Storage
    
    if (!apiKey) {
      throw new Error('API Key no está configurada');
    }
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}` // Usa la API Key en el encabezado de autorización
      },
      body: JSON.stringify({
        model: "gpt-4", // Especifica el modelo de OpenAI
        messages: messages, // Pasa los mensajes al cuerpo de la solicitud
        temperature: 0.7, // Opcional: ajusta la creatividad de las respuestas
        max_tokens: 150 // Opcional: ajusta el número máximo de tokens en la respuesta
      })
    });

    if (!response.ok) {
      throw new Error(`Error al comunicarse con OpenAI: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content; // Devuelve la respuesta de OpenAI

  } catch (error) {
    console.error('Error en la comunicación con OpenAI:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el llamador de esta función
  }
};



