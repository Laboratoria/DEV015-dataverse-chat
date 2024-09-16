// Importa la función para obtener la API KEY desde apiKey.js

import { getApiKey } from "./apiKey.js";

const API_KEY = getApiKey();
const SentMessage = [];

export async function communicateWithOpenAI(petsData, message){
  
  SentMessage.push({role:"user", content: message});
  
  try{
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: "system", content: `Eres ${petsData.name}. Tu personalidad es ${petsData.description}. Responderás a los mensajes del usuario con un máximo de 30 palabras. Que la conversación sea fluida. Siempre ten en cuenta tu nombre y reflejar tu personalidad al responder.`},
          ...SentMessage 
        ]  
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    SentMessage.push({role: "assistant", content: reply});

    console.log(reply);
    return reply;
  } catch (error) {
    console.log("Error de OpenAI:", error);
    return undefined;
  }
}
