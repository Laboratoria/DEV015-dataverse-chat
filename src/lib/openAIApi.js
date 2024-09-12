import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = async (messages) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  const apiKey = getApiKey();
  if (!apiKey) {
    return null;
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: messages,
    }),
  });
  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.choices[0].message.content;
};
