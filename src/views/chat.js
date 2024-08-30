import { communicateWithApi } from "../lib/comunicateApiKey.js";

export default function renderChat({ id, name }) {
  const container = document.createElement("div");
  container.id = "chat-view";

  const title = document.createElement("h1");
  title.textContent = `Chat Sailor ${name}`;
  title.classList.add("chat-title");
  container.appendChild(title);

  const messageArea = document.createElement("div");
  messageArea.id = "send-message-area";
  container.appendChild(messageArea);

  const form = document.createElement("form");
  form.id = "chat-form";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "messageInput";
  form.appendChild(input);

  const button = document.createElement("button");
  button.type = "submit";
  button.classList.add("button-send");
  button.textContent = "Enviar";
  form.appendChild(button);

  container.appendChild(form);

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const message = input.value.trim();
    if (message) {
      const userMessageElement = document.createElement("p");
      userMessageElement.textContent = `Tú: ${message}`;
      messageArea.appendChild(userMessageElement);
      messageArea.scrollTop = messageArea.scrollHeight;

      input.value = "";

      try {
        const response = await communicateWithApi(message, id, name);
        const responseMessageElement = document.createElement("p");
        responseMessageElement.textContent = `Sailor ${name}: ${response}`;
        messageArea.appendChild(responseMessageElement);
        messageArea.scrollTop = messageArea.scrollHeight;
      } catch (error) {
        console.error("Error al comunicar con la API:", error);
        const errorMessageElement = document.createElement("p");
        errorMessageElement.textContent = "Hubo un error al enviar el mensaje.";
        messageArea.appendChild(errorMessageElement);
        messageArea.scrollTop = messageArea.scrollHeight;
      }
    }
  });

  return container;
}
