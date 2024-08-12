import { createHeader } from '../components/componentsHeader.js';
import { createFooter } from '../components/componentsFooter.js';
import { createApiKey } from '../components/componentsApiKey.js';


export function api() {
  const container = document.createElement('div');
  container.className = 'containerApi';

  const containerHeader = document.createElement('div');
  containerHeader.className = 'containerHeaderApi';

  const containerBody = document.createElement('div');
  containerBody.className = 'containerBodyApi';

  const containerFooter = document.createElement('div');
  containerFooter.className = 'containerFooterApi';


  const header = createHeader();
  const body = createApiKey();
  const footer = createFooter();


  containerHeader.appendChild(header);
  containerBody.appendChild(body);
  containerFooter.appendChild(footer);
  

  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  container.appendChild(containerFooter);


  return container;
}

