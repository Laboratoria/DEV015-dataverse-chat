import { createHeader } from '../components/componentsHeader.js';
import { createFooter } from '../components/componentsFooter.js';

export function ChatIndividual() {
  const container = document.createElement('div');
  container.className = 'containerCI';

  const containerHeader = document.createElement('div');
  containerHeader.className = 'containerHeaderCI';

  const containerBody = document.createElement('div');
  containerBody.className = 'containerBodyCI';
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
    <input type="text" placeholder="Tu Mensaje" />
    <button class="sendMessage">Enviar</button>
  `;

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

