import { setRoutes, setRootEl, onURLChange, navigateTo } from "./router.js";
import { Home } from "./views/Home.js";
import { Panel } from "./views/Panel.js";
import { Chat } from "./views/Chat.js"
// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.


setRoutes({
  home: {
    path: "/",
    component: Home,
  },
  panel: {
    path: "/panel",
    component: Panel,
  },
  chat: {
    path: "/chat",
    component: Chat,
  }
});

// linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
// capturar el div principal
const rootElement = document.getElementById("root");
setRootEl(rootElement);

const navHome = document.querySelector("#home");
navHome.addEventListener('click', function(){
  // guarda la pagina en el historial
  onURLChange(window.location);
  navigateTo("/", {component: Home});
});

const navPanel = document.querySelector("#panel");
navPanel.addEventListener('click', function(){
  // guarda la pagina en el historial
  onURLChange(window.location);
  navigateTo("/panel", {component: Panel});
});

const navChat = document.querySelector("#chat");
navChat.addEventListener('click', function(){
  // guarda la pagina en el historial
  onURLChange(window.location);
  navigateTo("/chat", {component: Chat});
});



// event listener que simula el cambio de ruta (cambios en el historial)
window.addEventListener("popstate", () => {
  onURLChange(window.location);
  console.log("estamos en ->" + window.location.pathname);
});
onURLChange(window.location);
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
