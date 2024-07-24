import { Principal } from './views/home.js'; 
import { chatGrupal } from './views/chatGrupal.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Principal,
  '/chatGrupal': chatGrupal
};
setRoutes(routes); // Assign the routes


// Set the root element where views will be rendered

window.addEventListener('DOMContentLoaded', () => { //POR QUE EN LA GUIA ESTA WINDOW 
  const rootElement = document.getElementById("root");
  //const header ???
  //constfooter ??
  setRootEl(rootElement);
  onURLChange();
});