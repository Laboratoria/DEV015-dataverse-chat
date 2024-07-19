import { Home } from './views/Home.js';
import { chatGrupal } from './views/groupChat.js';

const routes = {
  '/': Home,
  '/chatGrupal': chatGrupal
};

const rootDiv = document.getElementById('root');

export function testingRouter() {
  window.addEventListener('hashchange', () => {
    loadRoute();
  });

  loadRoute(); // Cargar la ruta inicial
}

function loadRoute() {
  const path = window.location.hash.replace('#', '') || '/';
  const view = routes[path];

  if (view) {
    rootDiv.innerHTML = '';
    rootDiv.appendChild(view());
  }
}
