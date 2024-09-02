// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

// Definir rutas en router
import { setRootEl, setRoutes, onURLChange } from './router.js'; 
import notFound from './views/NotFound.js'
import viewApi from './views/Apikey.js';
import individualChat from './views/ChatIndividual.js';
import home from './views/Home.js'; 

const routes = {
  '/': home,
  '/apiKey': viewApi,
  '/individualChat': individualChat, 
  '/404': notFound,

};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('El elemento con ID "root" no se encuentra en el DOM.');
}

setRoutes(routes);

document.addEventListener('DOMContentLoaded', initializePage);

function initializePage() {
  setRootEl(rootElement);
  onURLChange(window.location); 
}

// Manejar la navegación hacia atrás o hacia adelante en el historial
window.addEventListener('popstate', () => {
  setRootEl(rootElement);
  onURLChange(new URL(window.location.href)); 
});
















