let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
  return rootEl; // Llama al root que está en el main.js
};

export const setRoutes = (routes) => {
  ROUTES = routes;
  return ROUTES;
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
};

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = ''; // Limpia el contenido del elemento root
  const vistaPathname = ROUTES[pathname] || ROUTES["/page-error"]; // Manejar rutas no definidas
  const viewElement = vistaPathname(props); // Renderiza la vista correcta
  rootEl.append(viewElement);
};

export const navigateTo = (pathname, props = {}) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  const { pathname, search } = location;
  const props = queryStringToObject(search);
  renderView(pathname, props);
};
