import Home from './views/home/Home.js';
import Detail from './views/detail/Detail.js';
import Error from './views/Error.js';
import Conference from './views/conference/Conference.js';

// Importa otras vistas según sea necesario
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define las rutas y las vistas asociadas
const routes = {
  '/': Home,
  '/detail': Detail,
  '/error': Error,
  '/conference': Conference,
  // Agrega más rutas y vistas aquí
};

// Configura las rutas
setRoutes(routes);

// Asigna el elemento raíz donde se renderizarán las vistas
window.addEventListener("DOMContentLoaded", () => {
  // Supongamos que tu elemento raíz en el HTML es un div con id 'root'
  const rootElement = document.getElementById('root');
  setRootEl(rootElement);

  // Maneja la carga de la página inicial
  onURLChange(window.location);

  // Escucha los cambios de URL (navegación)
  window.onpopstate = () => onURLChange(window.location);

  const facts = document.querySelector("#curious_fact");
  facts.textContent = renderStats(computeStats(data));

});
