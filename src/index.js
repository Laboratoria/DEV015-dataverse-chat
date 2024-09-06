import Home from "./views/home.js";
import Character from "./views/characterOld.js";
import ErrorView from "./views/errorView.js";
import viewApi from "./views/viewApi.js";
import renderChat from "./views/chat.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";

//CONFIGURAR EL ROUTER

// Define las rutas
const routes = {
  "/": Home,
  "/character": Character,
  "/errorView": ErrorView,
  "/viewApi": viewApi,
  "/chat": renderChat,
};

// Asigna rutas
setRoutes(routes);

// Configura el elemento raíz
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root"); 
  if (rootElement) {
    setRootEl(rootElement);
    onURLChange(window.location); // Entrega la ubicacion actual
  } 
});
