
// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (messages) => {
   const apiKey = getApiKey();
   const url = 'https://api.openai.com/v1/chat/completions'; // Endpoint para GPT-4 u otro modelo

   /*
   messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Tell me a joke.' }
    ]
      */

   try {
       const response = await fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${apiKey}`
           },
           body: JSON.stringify({
               model: 'gpt-4', // O el modelo que estés utilizando
               messages: messages
           })
       }).then(response => {
         if (!response.ok) {
           throw new Error(`Error: ${response.status} ${response.statusText}`);
         }
         return response.json(); // Parse the JSON response
       })
       .then(data => {
         console.log('Response from OpenAI:', data);

         const assistantMessage = data.choices[0].message.content;
         alert(assistantMessage);

       })
       .catch(error => {
         console.error('There was an error with the fetch operation:', error);
       });

   } catch (error) {
       console.error('Error comunicándose con OpenAI:', error);
       throw error;
   }
};