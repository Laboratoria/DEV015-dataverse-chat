import { getApiKey, setApiKey } from '../lib/apiKey.js';

export default function renderviewApi() {
    const container = document.createElement('div');
    
    const apiKeyInput = document.createElement('input');    
    apiKeyInput.type = 'text';
    apiKeyInput.id = 'apiKeyInput';
    apiKeyInput.placeholder = 'Ingrese su API Key aquí';
    apiKeyInput.value = getApiKey() || ''; 
    //valor del campo con la API almacenada previamente, o una cadena vacía si no hay una API.
    
    const saveButton = document.createElement('button');
    saveButton.id = 'saveApiKeyButton';
    saveButton.textContent = 'Guardar API Key';
    
    saveButton.addEventListener('click', () => { //valor ingresado, sin espacios
      const apiKey = apiKeyInput.value.trim();
      if (apiKey) {
        setApiKey(apiKey);
        console.log('API Key guardada correctamente:', apiKey); //alert
      } else {
        console.log('Por favor, ingrese una API Key válida');
      }
    });
  
    container.appendChild(apiKeyInput);
    container.appendChild(saveButton);
    
    return container;
  }