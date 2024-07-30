//implementa las partes del router siguiendo la API = CODIFICA EL ROUTER


// definimos las 2 variables
let ROUTES = {};
let rootEl;

// Funciones
export function setRoutes(routes) {
    if (typeof routes !== 'object' || routes === null) {
      throw new Error('El argumento routes debe ser un objeto');
    }
    ROUTES = routes;
  }

// funcion con el elemento raiz donde se mostraran las vistas
export function setRootEl(element) {
    rootEl = element;
}

export function renderView(pathname, props = {}) { // Renderizar la vista correspondiente a una ruta 
  if (rootEl) {
    rootEl.innerHTML = ''; // Borra el contenido existente
    const viewFunction = ROUTES[pathname];
    if (viewFunction) {
      const viewElement = viewFunction(props);
      rootEl.innerHTML = viewElement;
    } else {
      rootEl.innerHTML = '<h1>404 - Página no encontrada</h1>';
    }
  } else {
    console.error('Elemento raíz no está definido. Usa setRootEl para definirlo.');
  }
}

export function queryStringToObject(queryString) {
    return queryString
      ? JSON.parse('{"' + decodeURI(queryString.substring(1).replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
      : {};
  }
  
  export function onURLChange(location) {
    const pathname = location.pathname;
    renderView(pathname);
  }
  export function navigateTo(pathname, props = {}) {
    // Actualizar la URL del navegador
    window.history.pushState({}, '', pathname);
  
    // Obtener la vista correspondiente para la ruta
    const View = routes[pathname];
    
    if (View) {
      // Renderizar la vista correspondiente
      renderView(View, props);
    } else {
      // Manejar la ruta no encontrada
      console.error('Ruta no encontrada:', pathname);
    }
  }
