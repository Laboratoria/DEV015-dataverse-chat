import { getContext } from "../views/chatUnico.js";
export const cardMovie = (item) => {
  const divContenedor = document.createElement("div");
  divContenedor.classList.add("divContenedor");
  const divElement = document.createElement("div");
  divElement.innerHTML = "";
  divElement.classList.add("infoMovie");
  divElement.innerHTML = `
    <div>
    <h2> ${item.name} </h2>
    <div class="contenedorImagen">
        <img class=imagenDiv src="${item.imageUrl}" alt="${item.id}">
      </div>
      <div class="contenedorTextos">
        <span>${item.shortDescription}</span> 
         
        <span><b>Año de estreno:</b> ${item.facts.estreno}</span> 
         <span><b>Género:</b> ${item.facts.generoPelicula}</span> 
         <span><b>Clasificación en IMDb:</b> ${item.facts.clasificPublico}</span> 
         <span><b>Duración:</b> ${item.facts.tiempoDuracion}</span> 
         <span> <b>Resumen:</b> ${item.description}</span>
        <span> <b>¿Sabías qué?: </b> ${item.extraInfo.curiosidades}</span>
      </div>
    </div>
    `;

  const divChat = document.createElement("div");
  divChat.classList.add("chatMovie");

  divChat.innerHTML = `
    <div class= "chatContenedor">
    <div class="chatHistorial" id="chatHistorial"></div>
    <div class="chatInput">
      <input type="text" id="chatMessage" placeholder="Escribe tu mensaje...">
      <button id="chatSend">Enviar</button>
    </div>
  </div>
`;
  const button = divChat.querySelector("#chatSend");
  button.addEventListener("click", async function () {
    const chatHistorial = divChat.querySelector("#chatHistorial");
    const chatMessage = divChat.querySelector("#chatMessage");

    const message = chatMessage.value.trim();
    if (message) {
      // Agregar el mensaje al historial del chat
      const userMessageDiv = document.createElement("div");
      userMessageDiv.classList.add("userMessage");
      userMessageDiv.textContent = `Tú: ${message}`;
      chatHistorial.appendChild(userMessageDiv);

      // Aquí puedes implementar la lógica para enviar el mensaje y recibir una respuesta
      // Ejemplo (ficticio) de respuesta:
      const response = await getContext(item.name, message);

      const responseMessageDiv = document.createElement("div");
      responseMessageDiv.classList.add("responseMessage");
      responseMessageDiv.textContent = `Bot: ${response}`;
      chatHistorial.appendChild(responseMessageDiv);

      // Limpiar el campo de entrada
      chatMessage.value = "";

      // Desplazar el historial hacia abajo
      chatHistorial.scrollTop = chatHistorial.scrollHeight;
    }
  });

  divContenedor.appendChild(divElement);
  divContenedor.appendChild(divChat);

  return divContenedor;
};
