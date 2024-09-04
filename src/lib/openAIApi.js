import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
const apiKey = getApiKey();
const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
    },
    body:JSON.stringify({
        "model": "gpt-4o",
        "messages": messages,
    })
});
const data = await response.json();
console.log(data);
return data.choices[0].message.content;
};
