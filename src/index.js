import Home from './views/home.js';
import Cards from './views/cards.js';
import ErrorView from './views/errorView.js';
import { setRootEl, setRoutes, onURLChange, initRouter } from './router.js';

//CONFIGURAR EL ROUTER

// Define las rutas
const routes = {
    '/': Home,
    '/cards': Cards,
    '/errorView': ErrorView,
  };

  // Asigna rutas
  setRoutes(routes);
  
  // Configura el elemento raíz
  window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root'); //
    if (rootElement) {
      setRootEl(rootElement);
      onURLChange(window.location);
    } else {
      console.error('Root element not found');
    }
  });
   // Inicia el router
    initRouter();

// Maneja la navegacion de ir ahacia delante o atrás
window.addEventListener('popstate', () => {
  onURLChange(window.location);
});