import home from './views/home.js';
import ApiKey from './views/ApiKey.js';
import chatIndividual from './views/chatIndividual.js';
import PageError from './views/PageError.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

const prueba = document.getElementById('root');
const routes = {
  "/": home,
  "/ApiKey": ApiKey,
  "/chatIndividual": chatIndividual,
  "/PageError": PageError,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(prueba);
  onURLChange(window.location);
});

window.addEventListener("popstate", () => {
  onURLChange(window.location);
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
