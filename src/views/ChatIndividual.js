import { createHeader } from '../components/componentsHeader.js';
import { createFooter } from '../components/componentsFooter.js';
import { navigateTo } from '../router.js';
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

  const containerCIOnly = document.createElement('div');
  containerCIOnly.className = 'containerCIOnly'

/*
  const barraLateralCI = document.createElement('div');
  barraLateralCI.className = 'barraLateralCI';

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

  barraLateralCI.appendChild(buscar);
  barraLateralCI.appendChild(selectCategoria);

  containerBody.appendChild(barraLateralCI);
*/


  const gameId = props.data;
  const game = data.find(item => item.id === gameId);
  if (game) {
    const gameCard = document.createElement('div');
    gameCard.className = 'gameCard';

    const imageUrlElement = document.createElement('img');
    imageUrlElement.setAttribute("src", game.imageUrl);

    const longDescriptionElement = document.createElement('p');
    longDescriptionElement.innerHTML = `${game.description}`;
    longDescriptionElement.className = 'longDescriptionElement';

    const buttonMore = document.createElement('button');
    buttonMore.textContent = 'ver más';
    buttonMore.className = 'buttonMore';
    buttonMore.addEventListener('click', function () {
      if (longDescriptionElement.classList.contains('expanded')) {
        longDescriptionElement.classList.remove('expanded');
        buttonMore.textContent = 'ver más';
      } else {
        longDescriptionElement.classList.add('expanded');
        buttonMore.textContent = 'ver menos';
      }
    });

    gameCard.appendChild(imageUrlElement);
    gameCard.appendChild(longDescriptionElement);
    gameCard.appendChild(buttonMore);

    containerCIOnly.appendChild(gameCard);
  }

  const containerChatIndividual = document.createElement('div');
  containerChatIndividual.className = 'containerChatIndividual';

  const chatContainer = document.createElement('div');
  chatContainer.className = 'chatContainer';
  const chatHeader = document.createElement('div');
  chatHeader.className = 'chatHeader';
  const nameElement = document.createElement('p');
  nameElement.textContent = game.name;
  nameElement.classList = 'nameElementCI'
  const exitIcon = document.createElement('p');
  exitIcon.textContent = 'X';
  exitIcon.className = 'exitIcon';

  exitIcon.addEventListener('click', () => {
    navigateTo('/');
  });

  chatHeader.appendChild(nameElement);
  chatHeader.appendChild(exitIcon);
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

  containerCIOnly.appendChild(containerChatIndividual);
  containerBody.appendChild(containerCIOnly)


  const containerFooter = document.createElement('div');
  containerFooter.className = 'containerFooterCI';

  const header = createHeader();
  const footer = createFooter();

  containerHeader.appendChild(header);
  containerFooter.appendChild(footer);

  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  container.appendChild(containerFooter);

  return container;
}


