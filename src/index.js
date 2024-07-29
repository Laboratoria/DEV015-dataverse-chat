// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Home from './views/Home.js';
importar todas las views que creamos



Ejemplo de definición de rutas:
*/
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.

Llamar elemento route 

*/

// window.addEventListener("DOMContentLoaded", () => {
//   // set root element
//   // invoke onURLChange 
// });

// // Handle URL changes
// window.addEventListener('popstate', ({objetivo}) => {
//   onURLChange(/* location */);
// });


import { Home } from './views/Home.js'


document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.getElementById('root');
  rootElement.appendChild(Home());

});




