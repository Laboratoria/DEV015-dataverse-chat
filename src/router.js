//implementa las partes del router siguiendo la API = CODIFICA EL ROUTER


// definimos las 2 variables
let ROUTES = {};
let rootEl;

// funcion con el elemento raiz donde se mostraran las vistas
export function setRootEl(element) {
  rootEl = element;// Asignar rootEl
}

export const setRoutes = (routes) => {
  // Validar si routes es un objeto
  if (typeof routes !== 'object' || routes === null) {
    throw new Error('Routes debe ser un objeto.');
  }
  // Validar si routes tiene una ruta '/error'
  if (!('/error' in routes)) {
    throw new Error('El objeto routes debe definir una ruta "/error".');
  }
  // Asignar ROUTES 
  ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  // Convierte un query a urlsearchparam, facilita la manipulación.
  const params = new URLSearchParams(queryString);

  // Convertir URLSearchParams a un objeto
  const obj = {};
  params.forEach((value, key) => {
    obj[key] = value;
  });

  // Retornar el objeto
  return obj;
};

const renderView = (pathname, props = {}) => {
  // Limpiar el elemento raíz
  if (rootEl) {
    rootEl.innerHTML = '';
  }

  // Encontrar la vista correcta en ROUTES para el pathname
  const view = ROUTES[pathname] || ROUTES['/error'];

  // Verificar si la vista es una función y renderizarla
  if (typeof view === 'function') {
    // Renderiza
    const viewElement = view(props);
    rootEl.appendChild(viewElement);
    }
};

export const navigateTo = (pathname, props = {}) => {
  // Actualizar el historial del navegador con pushState
  window.history.pushState({}, '', pathname);

  // Renderizar la vista con el pathname y props
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  // Parsear la location para obtener pathname y search params
  const { pathname, search } = location;

  // Convertir los search params en un objeto
  const params = new URLSearchParams(search);
  const queryObject = {};
  params.forEach((value, key) => {
    queryObject[key] = value;
  });

  // Renderizar la vista con el pathname y el objeto de parámetros
  renderView(pathname, queryObject);
};