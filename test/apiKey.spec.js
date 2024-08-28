import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

import { communicateWithOpenAI } from './utils/openAIApi.js';

const dataList = ['element1', 'element2', 'element3'];  // Lista de elementos

async function processDataWithOpenAI() {
  try {
    // Usamos Promise.all() para ejecutar todas las llamadas a la API simultáneamente
    const responses = await Promise.all(
      dataList.map(item => communicateWithOpenAI(item))  // Enviar un mensaje para cada elemento
    );

    // Mostrar todas las respuestas
    responses.forEach(response => console.log('Respuesta:', response));
  } catch (error) {
    console.error('Error:', error);
  }
}

// Llamar a la función
processDataWithOpenAI();