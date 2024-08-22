import { getApiKey, setApiKey } from '../lib/apiKey.js';

export default function viewApi() {
    const container = document.createElement('div');
    
    const apiKeyInput = document.createElement('input');    
    apiKeyInput.type = 'text';
    apiKeyInput.id = 'apiKeyInput';
    apiKeyInput.placeholder = 'Ingrese su API Key aquí';
    apiKeyInput.value = getApiKey() || ''; 
    
    const saveButton = document.createElement('button');
    saveButton.id = 'saveApiKeyButton';
    saveButton.textContent = 'Guardar API Key';
    
    saveButton.addEventListener('click', () => {
      const apiKey = apiKeyInput.value.trim();
      if (apiKey) {
        setApiKey(apiKey);
        console.log('API Key guardada correctamente:', apiKey);
      } else {
        console.log('Por favor, ingrese una API Key válida');
      }
    });
  
    container.appendChild(apiKeyInput);
    container.appendChild(saveButton);
    
    return container;
  }