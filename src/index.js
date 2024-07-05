import { setRoutes, setRootEl, renderView, onURLChange } from "./router.js";
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

// capturar el div principal
const rootElement = document.getElementById("root");
setRootEl(rootElement);

const navHome = document.querySelector("#home");
navHome.addEventListener('click', onURLChange(window.location));

const navPanel = document.querySelector("#panel");
navPanel.addEventListener('click', onURLChange(window.location));

const navChat = document.querySelector("#chat");
navChat.addEventListener('click', onURLChange(window.location));
// event listener que simula el cambio de ruta (cambios en el historial)
// window.addEventListener("popstate", () => {
//   renderView(window.location.pathname, {});
// });

// renderView(window.location.pathname , {});
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
