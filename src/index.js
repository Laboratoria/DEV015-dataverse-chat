import home from './views/home.js';
import ApiKey from './views/ApiKey.js';
import chatIndividual from './views/chatIndividual.js';
import PageError from './views/PageError.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Configuración de rutas
const routes = {
  "/": home,
  "/api-key": ApiKey,
  "/chat-individual": chatIndividual,
  "/page-error": PageError,
};

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  setRootEl(rootElement);
  setRoutes(routes);
  onURLChange(window.location); // Renderiza la vista inicial
});

// Manejo del historial
window.addEventListener("popstate", () => {
  onURLChange(window.location);
});



/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
