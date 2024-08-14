
let ROUTES = {};
let rootEl = null;

// Función para establecer el elemento raíz donde se renderizan las vistas
export const setRootEl = (el) => {
  rootEl = el;
}

// Función para establecer las rutas
export const setRoutes = (routes) => {
  if (typeof routes !== 'object') {
    throw new Error('Las rutas deben ser un objeto');
  }
  if (!routes['/error']) {
    throw new Error('Las rutas deben definir una ruta /error');
  }
  ROUTES = routes;
};

// Función para convertir los parámetros de búsqueda en un objeto
const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const obj = {};
  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }
  return obj;
}

// Función para renderizar la vista basada en la ruta
const renderView = (pathname, props = {}) => {
  if (rootEl) {
    rootEl.innerHTML = ''; // Limpiar el elemento raíz
    // Obtener la vista correspondiente o la vista de error
    const View = ROUTES[pathname] || ROUTES['/error'];
    // Renderizar la vista pasando los props
    const viewEl = View(props); 
    rootEl.appendChild(viewEl); // Agregar la vista al DOM
  }
}

// Función para navegar a una nueva ruta
export const navigateTo = (pathname, props = {}) => {
  // Actualizar el historial
  window.history.pushState({}, '', pathname); 
  // Renderizar la vista correspondiente
  renderView(pathname, props); 
}

// Función para manejar cambios en la URL
export const onURLChange = (location) => {
  const pathname = location.pathname;
  // Convertir los parámetros de búsqueda en objeto
  const searchParams = queryStringToObject(location.search); 
  // Renderizar la vista basada en la ruta y los parámetros de búsqueda
  renderView(pathname, searchParams); 
}
