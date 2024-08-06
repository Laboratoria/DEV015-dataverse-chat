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
  containerChatIndividual.innerHTML = 'Bienvenida a la ventana de Chat Individual.';

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

