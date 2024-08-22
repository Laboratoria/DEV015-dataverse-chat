import home from './views/home.js';
import ApiKey from './views/ApiKey.js';
import chatIndividual from './views/chatIndividual.js';
import PageError from './views/PageError.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

const routes = { //configuramos las rutas
  "/": home,
  "/api-key": ApiKey,
  "/chat-individual": chatIndividual,
  "/page-error": PageError,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => { //Inicializamos el SPA
  setRootEl(document.getElementById('root'))
  onURLChange(window.location);
});

window.addEventListener("popstate", () => { // Manejo del historial
  onURLChange(window.location);
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
