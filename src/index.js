import Home from './views/home.js';
import {Films} from './views/pelicula.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';


// Define your routes and their associated views
const routes = {
  '/': Home,
 '/pelicula': Films,

  
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  setRootEl(rootEl);
  onURLChange(window.location);



});