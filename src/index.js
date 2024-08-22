import Home from './views/home.js';
import Character from './views/characterOld.js';
import ErrorView from './views/errorView.js';
import viewApi from './views/viewApi.js';
import Chat from './views/Chat.js';
import { setRootEl, setRoutes, onURLChange, initRouter } from './router.js';


//CONFIGURAR EL ROUTER

// Define las rutas
const routes = {
    '/': Home,
    '/character': Character,
    '/errorView': ErrorView,
    '/viewApi': viewApi,
    '/chat': Chat,
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