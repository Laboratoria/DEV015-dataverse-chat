import { communicateWithOpenAI } from "../lib/openAIApi.js";

export async function getContext(name, pregunta, allCharacters) {
  let message;
  if (!allCharacters) {
    message =
      "Eres la pelicula " +
      name +
      " y responderás según su historia y como si fueras el protagonista, la siguiente pregunta: " +
      pregunta;
  }
  return await communicateWithOpenAI([
    {
      role: "user",
      content: message,
    },
  ]);
}
