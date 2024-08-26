// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

// Definir rutas en router
import { setRootEl, setRoutes, onURLChange, navigateTo } from './router.js'; 
import viewApi from './views/Apikey.js';
import individualChat from './views/ChatIndividual.js';
import home from './views/Home.js'; 

const routes = {
  '/': home,
  '/apiKey': viewApi,
  '/individualChat': individualChat, 
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('El elemento con ID "root" no se encuentra en el DOM.');
}

setRoutes(routes);

window.addEventListener('DOMContentLoaded', () => {
  setRootEl(rootElement);
  onURLChange(window.location); 

  const aboutUsEl = document.querySelector('.about-us');
  const individualChatButton = document.querySelector('.individual-chat');
  
    if (aboutUsEl) {
        aboutUsEl.addEventListener('click', () => {
            navigateTo("/apiKey");
        });
    } else {
        console.error('El elemento con clase "apiKey" no se encuentra en el DOM.');
    }


    if(individualChatButton){
      individualChatButton.addEventListener('click', () => {
        navigateTo("/individualChat");
    });
   } else {
      console.error('El elemento con clase "individualChat" no se encuentra en el DOM.');
    }
});

// Manejar la navegación hacia atrás o hacia adelante en el historial
window.addEventListener('popstate', () => {
  setRootEl(rootElement);
  onURLChange(new URL(window.location.href)); 

  const aboutUsEl = document.querySelector('.about-us');
  if (aboutUsEl) {
    aboutUsEl.addEventListener('click', () => {
      navigateTo("/apiKey"); // Navegar a la página about
    });
  } else {
    console.error('El elemento con clase "apiKey" no se encuentra en el DOM.');
  }

  const individualChatButton = document.querySelector('.individual-chat');
  if(individualChatButton){
    individualChatButton.addEventListener('click', () => {
      navigateTo("/individualChat");
  });
 } else {
    console.error('El elemento con clase "individualChat" no se encuentra en el DOM.');
  }
});