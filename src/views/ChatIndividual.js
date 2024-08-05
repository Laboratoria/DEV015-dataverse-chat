import { createHeader } from '../components/componentsHeader.js';
import { createFooter } from '../components/componentsFooter.js';
export function ChatIndividual() {
  const container = document.createElement('div');
  const containerHeader = document.createElement('div');
  containerHeader.className = 'containerHeaderHome';
  const containerBody = document.createElement('div');
  containerBody.innerHTML = 'Bienvenida a la página del chat individual.';
  const containerFooter = document.createElement('div');
  containerFooter.className = 'containerFooterHome';

  const header = createHeader();
  const footer = createFooter();


  containerHeader.appendChild(header);
  containerFooter.appendChild(footer);


  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  container.appendChild(containerFooter); 



  return container;
}

