// Importa la función para obtener la API KEY desde apiKey.js

const API_KEY = '';
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
        model: 'gpt-4o',
        messages: [
          { role: "system", content: `Eres ${petsData.name}, tu personalidad se basa en ${petsData.description}; vas a responder a los mensajes y preguntas del usuario y tus respuestas no van a tener más de 20 palabras`},
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
