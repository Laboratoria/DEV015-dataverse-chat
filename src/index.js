// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar??.

import {Home,About}  from './views/Home.js';
/*import (setRootEl) from './views/router.js';*/

 const routers = {
    "/": Home,
    "/about": About
}

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/