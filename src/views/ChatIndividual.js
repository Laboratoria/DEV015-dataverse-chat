import { createHeader } from '../components/componentsHeader.js';
import { createFooter } from '../components/componentsFooter.js';
// import { queryStringToObject } from '../router.js';
// import { renderItems } from '../components/componentsCards.js';

import data from '../data/dataset.js';
// import { communicateWithOpenAI } from '../lib/openAIApi.js';

export function ChatIndividual(props) {

  const container = document.createElement('div');
  container.className = 'containerCI';

  const containerHeader = document.createElement('div');
  containerHeader.className = 'containerHeaderCI';

  const containerBody = document.createElement('div');
  containerBody.className = 'containerBodyCI';

  const barraLateral = document.createElement('div');
  barraLateral.className = 'barraLateral';

  const buscar = document.createElement('label');
  buscar.textContent = 'Buscar juego:';
  buscar.className = 'buscarLabel';

  const selectCategoria = document.createElement('select');
  selectCategoria.id = 'selectBuscarJuego';
  selectCategoria.name = 'selectBuscarJuego';
  const optionDefault = document.createElement('option');
  optionDefault.textContent = 'Selecciona un juego';
  optionDefault.setAttribute("disabled", "disabled");
  optionDefault.setAttribute("selected", "");
  selectCategoria.appendChild(optionDefault);

  data.forEach(game => {
    const option = document.createElement('option');
    option.value = game.id;
    option.textContent = game.name;
    selectCategoria.appendChild(option);
  });

  barraLateral.appendChild(buscar);
  barraLateral.appendChild(selectCategoria);

  containerBody.appendChild(barraLateral);

  const gameId = props.data;

  const game = data.find(item => item.id === gameId);


  if(game) {
    
    const gameCard = document.createElement('div');
    gameCard.className = 'gameCard';

    const nameElement = document.createElement('h3');
    nameElement.textContent = game.name;

    const imageUrlElement = document.createElement('img');
    imageUrlElement.setAttribute("src", game.imageUrl);

    // const categoryElement = document.createElement('p');
    // categoryElement.innerHTML = `<strong class="boldText">Categoría:</strong>${game.facts.category}`;

    // const yearOfCreationElement = document.createElement('p');
    // yearOfCreationElement.innerHTML = `<strong class="boldText">Año de creación:</strong>${game.facts.yearOfCreation}`;

    // const rankingElement = document.createElement('p');
    // rankingElement.innerHTML = `<strong class="boldText">Calificación:</strong>${game.facts.ranking}`;

    const longDescriptionElement = document.createElement('p');
    longDescriptionElement.innerHTML = `${game.description}`;

    gameCard.appendChild(nameElement);
    gameCard.appendChild(imageUrlElement);
    // gameCard.appendChild(categoryElement);
    // gameCard.appendChild(yearOfCreationElement);
    // gameCard.appendChild(rankingElement);
    gameCard.appendChild(longDescriptionElement);

    containerBody.appendChild(gameCard);
  }

  const containerChatIndividual = document.createElement('div');
  containerChatIndividual.className = 'containerChatIndividual';

  const chatContainer = document.createElement('div');
  chatContainer.className = 'chatContainer';
  const chatHeader = document.createElement('div');
  chatHeader.className = 'chatHeader';
  chatHeader.innerHTML = 'Chat';
  const chatBody = document.createElement('div');
  chatBody.className = 'chatBody';

  const chatFooter = document.createElement('div');
  chatFooter.className = 'chatFooter';
  chatFooter.innerHTML = `
    <input id="input-message" type="text" placeholder="Tu Mensaje" />
    <button id="send-button" class="sendMessage">Enviar</button>
  `;

  chatFooter.querySelector('#send-button').addEventListener('click', () => {
    const inputMessage = chatFooter.querySelector('#input-message').value.trim();
    if (inputMessage !== '') {
      const messageElement = document.createElement('div');
      messageElement.className = 'user-message';
      messageElement.textContent = inputMessage;
      chatBody.appendChild(messageElement);
      chatFooter.querySelector('#input-message').value = ''; // Limpiar el input
    }
  });

  containerChatIndividual.appendChild(chatHeader);
  containerChatIndividual.appendChild(chatBody);
  containerChatIndividual.appendChild(chatFooter);
    

  const containerFooter = document.createElement('div');
  containerFooter.className = 'containerFooterCI';

  containerBody.appendChild(containerChatIndividual);


  const header = createHeader();
  const footer = createFooter();


  containerHeader.appendChild(header);
  containerFooter.appendChild(footer);


  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  container.appendChild(containerFooter); 




  return container;
}


