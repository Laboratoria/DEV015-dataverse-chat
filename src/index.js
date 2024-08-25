import {Home} from './views/home.js'
import {films} from '.view/pelicula.js'
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/pelicula': films,
  
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  setRootEl(rootEl);
  onURLChange(window.location);
});