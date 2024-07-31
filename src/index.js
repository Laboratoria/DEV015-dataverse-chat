import Home from './views/home.js';
import Cards from './views/cards.js'
import { setRootEl, setRoutes, onURLChange, navigateTo } from './router.js';

//CONFIGURAR EL ROUTER

// Define las rutas
const routes = {
    '/': Home,
    '/cards': Cards,
  };
  
  // Asigna rutas
  setRoutes(routes);
  
  // Configura el elemento raíz
  window.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById('root');
    setRootEl(rootElement);

    // Invocar onURLChange para manejar la carga inicial de la página
    onURLChange(window.location); 

  });

















  // Añade manejadores a los enlaces para cambiar la URL y renderizar la vista correspondiente sin recargar la página
   /*document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const pathname = link.getAttribute('href');
      window.history.pushState({}, pathname, window.location.origin + pathname);
      onURLChange(window.location);
    });
  });*/