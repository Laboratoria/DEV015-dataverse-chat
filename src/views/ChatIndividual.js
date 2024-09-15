import Footer from "../components/Footer.js";
import { Nav } from "../components/Nav.js";
import petsData from "../data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export function individualChat(props) {
  const individualChatView = document.createElement("div");
  individualChatView.className = 'body';

  const petData = petsData.find((pet) => pet.id === props.id);

  // Añadir la barra de navegación
  individualChatView.appendChild(Nav());

  /*const mainElement = document.createElement("main");
  mainElement.classList.add("chat-main");
  individualChatView.appendChild(mainElement);
  mainElement.appendChild(ChatIndividual(props));*/

  const sectionChat = document.createElement("section");
  sectionChat.classList.add("section-p2");
  sectionChat.id = "banner";

  console.log(petData.imageUrl);
  sectionChat.innerHTML = `
      <div class="item pri">
          <div class="chat-title">
              <div class="chat-title-text">
                  <img class="photo-dog" src="${petData.imageUrl}">
                  <div class="title-details">
                      <h1 class="name">${petData.name}</h1>
                      <span class="title-details-online"><i class="fa-solid fa-circle"></i> Online</span>
                  </div>
              </div>
          </div>
          <div class="chat-message">
              <div class="chat-message-date">
                  <span>May, 14</span>
              </div>
              <div class="chat-message-container">
                  <img class="chat-message-photo" src="${petData.imageUrl}">
                  <div class="chat-text"><span>¡Hola! soy ${petData.name} ¿Cómo estás?</span></div>
              </div>
          </div>
          <div class="chat-input">
              <textarea class="chat-input-text" placeholder="Write a message"></textarea>
              <button class="chat-input-button"><i class="fas fa-paper-plane"></i></button>
          </div>
      </div>
      <div class="item sec">
          <div class="item-sec-img">
              <img class="item-sec-img-background" src="${petData.imageUrl}">
          </div>
          <div class="item-sec-text">
              <div class="item-sec-text-name">
                  <span><i class="fa-solid fa-paw fa-beat"></i><a>${petData.name}</a></span>
              </div>
              <div class="item-sec-text-extra-info">
                  <span class="gender"><i class="fa-solid fa-venus-mars"></i> ${petData.facts.gender}</span>
                  <span class="age"><i class="fa-regular fa-clock"></i> ${petData.facts.age.years} years</span>
                  <span class="size"><i class="fa-solid fa-dog"></i> ${petData.facts.size}</span>
                  <span class="behaviour"><i class="fa-sharp fa-regular fa-bone"></i> ${petData.facts.temperament}</span>
              </div>
              <div class="item-sec-text-description">
                  <span>${petData.description}</span>
              </div>
              <div class="item-sec-text-curiosity">
                  <span><i class="fa-sharp-duotone fa-solid fa-heart"></i> ${petData.extraInfo.curiosities}</span>
              </div>
              <div class="item-sec-text-adoption">
                  <button class="adopt-btn">Adopt</button>
                  <button class="donate-btn">Donate</button>
              </div>
          </div>
      </div>
  `;

  individualChatView.appendChild(sectionChat);

  // Ahora que los elementos están añadidos al DOM, selecciona el botón
  const buttonChat = sectionChat.querySelector('.chat-input-button');
  const prompt = sectionChat.querySelector('.chat-input-text');
  const contentBubleMessages = sectionChat.querySelector('.chat-message');


  prompt.addEventListener('keypress', async function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      
      const prompt = this;
      
      if (!prompt.value) return; 
      
      createBubleMessageUser(); 
      
      try {
        // Espera la respuesta de la función asíncrona
        const response = await communicateWithOpenAI(petData, prompt.value);
        createBubleMessageAI(response); // Asegúrate de que esta función esté definida
      } catch (error) {
        console.error('Error communicating with OpenAI:', error);
      }
      
      prompt.value = ''; // Limpia el campo de entrada
    }
  });

  // Añadir el evento click directamente
  if (buttonChat) {
    buttonChat.addEventListener('click', async () => {
      createBubleMessageUser();
      if(!prompt.value) return
      const response = await communicateWithOpenAI(petData,prompt.value);
      createBubleMessageAI(response);
    });
  } else {
    console.error('Button not found');
  }

  //funcion para crear las burbujas de la AI
  function createBubleMessageAI(response){
    /*
    <div class="chat-message-container">
        <img class="chat-message-photo" src="${petData.imageUrl}">
        <div class="chat-text"><span>Wuf! Got any question?</span></div>
    </div>
    */
    const container = document.createElement('div');
    container.classList.add('chat-message-container');  

    //Crear y agregar imagen
    const image = document.createElement('img');
    image.classList.add('chat-message-photo');
    image.src = petData.imageUrl;

    // Crear y agregar contenedor de texto
    const textContainer = document.createElement('div');
    textContainer.classList.add('chat-text');

    // Crear y agregar texto
    const textSpan = document.createElement('span');
    textSpan.textContent = response;
    textContainer.appendChild(textSpan);

    // Agregar imagen y contenedor de texto al contenedor de la burbuja
    container.appendChild(image);
    container.appendChild(textContainer);
    
    contentBubleMessages.appendChild(container);
  }

  //funcion para crear las burbujas del User
  function createBubleMessageUser(){
    const container = document.createElement('div');
    container.classList.add('chat-message-container-user');  

    //Crear y agregar imagen
    const image = document.createElement('img');
    image.classList.add('chat-message-photo-user');
    image.src = 'https://raw.githubusercontent.com/avsoto/DEV015-dataverse-chat/hito3/src/assets/user.png';

    // Crear y agregar contenedor de texto
    const textContainer = document.createElement('div');
    textContainer.classList.add('chat-text-user');

    // Crear y agregar texto
    const textSpan = document.createElement('span');
    textSpan.textContent = prompt.value;
    textContainer.appendChild(textSpan);

    // Agregar imagen y contenedor de texto al contenedor de la burbuja
    container.appendChild(image);
    container.appendChild(textContainer);
    
    contentBubleMessages.appendChild(container);
    
    prompt.value='';
  }

  // Añadir el footer
  individualChatView.appendChild(Footer());

  return individualChatView; 
}

export default individualChat;