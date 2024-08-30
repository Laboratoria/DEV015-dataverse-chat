import home from './views/home.js';
import ApiKey from './views/ApiKey.js';
import chatIndividual from './views/chatIndividual.js';
import PageError from './views/PageError.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Configuración de rutas
const routes = {
  "/": home,
  "/api-key": ApiKey,
  "/chat-individual": chatIndividual,
  "/page-error": PageError,
};
//Añade un evento que se ejecuta cuando la página está lista para ser manipulada
document.addEventListener('DOMContentLoaded', () => {
  //contenedor principal donde se va a renderizar la vista de la aplicación
  const rootElement = document.getElementById('root');
  //dice al enrutador cuál es el elemento raíz donde debe renderizar las vistas
  setRootEl(rootElement);
  //configura las rutas de la aplicación, asociando cada ruta con su correspondiente componente o función
  setRoutes(routes);
  //asegura que la vista correcta se renderice en función de la URL actual 
  onURLChange(window.location); // Renderiza la vista inicial
});

// Manejo del historial
//cuando el usuario navega hacia adelante o hacia atrás usando los botones del navegador.
window.addEventListener("popstate", () => {
//permite que la aplicación renderice la vista correcta cada vez que cambia la URL
  onURLChange(window.location);
});
