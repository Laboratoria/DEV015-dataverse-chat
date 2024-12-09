import { Home } from "../views/Home.js";
import { Films } from "./views/Peliculas.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";

// Define your routes and their associated views
const routes = {
  "/": Home,
  "/pelicula": Films,
  "/error": Error,
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  setRootEl(rootEl);
  onURLChange(window.location);
});

// Handle URL changes
window.addEventListener("popstate", ({ target }) => {
  onURLChange(target.location);
});
