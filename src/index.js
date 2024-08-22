import { renderHeader } from './components/Renderheader.js';
import home from './views/home.js';
import ApiKey from './views/ApiKey.js';
import chatIndividual from './views/chatIndividual.js';
import PageError from './views/PageError.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

renderHeader(); //llama a la función que renderiza el header
const prueba = document.getElementById('root'); //obtengo el elemento root
const routes = { //configuramos las rutas
  "/": home,
  "/ApiKey": ApiKey,
  "/chatIndividual": chatIndividual,
  "/PageError": PageError,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => { //Inicializamos el SPA
  setRootEl(prueba);
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
