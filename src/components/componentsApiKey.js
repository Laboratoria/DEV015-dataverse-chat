import { getApiKey } from '../lib/apiKey.js';
import { setApiKey } from '../lib/apiKey.js';

export function createApiKey() {
  const container = document.createElement('div');
  container.className = 'apiContainer'

  const apiTitulo = document.createElement('h2');
  apiTitulo.className = 'apiTitulo';
  apiTitulo.innerHTML = 'API KEY';

  const apiTextArea = document.createElement('textarea');
  apiTextArea.className = 'apiTextArea';
  apiTextArea.id='apiTextArea';

  const containerButtons = document.createElement('div')

  const apiButtonGuardar = document.createElement('button');
  apiButtonGuardar.className = 'apiButton';
  apiButtonGuardar.id = 'apiButton';
  apiButtonGuardar.innerHTML = 'Guardar Api Key';
  apiButtonGuardar.addEventListener('click', () => {
    const apiKeyText = apiTextArea.value;
    setApiKey(apiKeyText);

    console.log(getApiKey())
  });

  const apiButtonCargar = document.createElement('button');
  apiButtonCargar.className = 'apiButton';
  apiButtonCargar.id = 'apiButton';
  apiButtonCargar.innerHTML = 'Cargar Api Key';
  apiButtonCargar.addEventListener('click', () => {
    apiTextArea.value = getApiKey();
  });

  containerButtons.appendChild(apiButtonGuardar);
  containerButtons.appendChild(apiButtonCargar);

  container.appendChild(apiTitulo);
  container.appendChild(apiTextArea);
  container.appendChild(containerButtons);  

  return container;
}