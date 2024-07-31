import { setRootEl, setRoutes, onURLChange } from './router.js';
import Home from './home.js';
import about from './about.js';
import ErrorView from './errorView.js';


//CONFIGURAR EL ROUTER

// Define rutas
export const routes = {
    '/home': Home,
    '/about': about,
    "/error": ErrorView, 
  };
  
  // Asigna rutas
  setRoutes(routes);
  
  // Configurar el elemento raíz
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById('root'));
  
  // Manejar la carga inicial de la URL
  onURLChange({
    pathname: window.location.pathname,
    search: window.location.search
  });
});

// Manejar la navegación del historial
window.addEventListener('popstate', () => {
  const location = {
    pathname: window.location.pathname,
    search: window.location.search
  };
  onURLChange(location);
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