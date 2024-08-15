import { Home } from './src/views/Home';
import { ApiKey } from './src/views/ApiKey';
import { ChatIndividual } from './src/views/ChatIndividual';
import { ErrorPage } from './src/views/ErrorPage';
import { setRootEl, setRoutes, onURLChange } from './src/router.js';

document.getElementById('root').textContent = 'Prueba de contenido';

const routes = {
  '/': Home,
  '/apikey': ApiKey,
  '/chat': ChatIndividual,
  '/error': ErrorPage
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById('root'));
  onURLChange(window.location);
});

window.addEventListener('popstate', () => {
  onURLChange(window.location);
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
