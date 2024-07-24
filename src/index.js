// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { onURLChange, setRootEl, setRoutes } from './router.js'
import home  from './views/home.js';
import chat  from './views/chat.js';
import panel  from './views/panel.js';
import error  from './views/error.js';
import apiKey  from './views/apiKey.js';

//Ejemplo de definición de rutas:

const routes = {
  "/": home,
  "/panel": panel,
  "/chat": chat,
  "/error": error,
  "/api-key": apiKey
}

setRoutes(routes);
window.addEventListener('DOMContentLoaded',  () => {
  setRootEl(document.querySelector('#root'));
  onURLChange(window.location)
})

window.addEventListener('popstate', () => {
  onURLChange(window.location);
});


/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/