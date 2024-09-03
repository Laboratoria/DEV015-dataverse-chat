// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


export const communicateWithOpenAI = (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
const apiKey = getApiKey();

fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
    },
    body:JSON.stringify({
        "model": "gpt-4o-mini",
        "messages": messages,
        "temperature": 0.7
    })
})

};
