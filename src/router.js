let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;

  return rootEl;
};

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  if (typeof routes !== "object") {
    throw new Error("no es un objeto");
  }
  // optional Throw errors if routes doesn't define an /error route
  if (!routes["/error"]) {
    throw new Error("la vista de error no existe");
  }
  // assign ROUTES
  ROUTES = routes;

  return ROUTES;
};

export const queryStringToObject = (queryString) => {
  const urlSearchParams = new URLSearchParams(queryString);
  return Object.fromEntries(urlSearchParams);
};

export const renderView = (pathname, props = {}) => {
  //props son los search params

  // clear the root element
  rootEl.innerHTML = "";
  const viewPath = ROUTES[location.pathname];

  if (!viewPath) {
    navigateTo("/error");
    return;
  }
  const component = viewPath(props);
  rootEl.append(component);
};

export const navigateTo = (pathname, props = {}) => {
  // Esta función se utiliza para navegar mediante programación a una nueva ruta dentro del SPA (por ejemplo, hacer clic en botones o enlaces dentro de la aplicación). Actualiza la URL usando window.history.pushState y luego llama a renderView él pathname y los prop usdados para mostrar la vista correspondiente.
  // update window history with WINDOW.HISTORY.pushState

  const url = `${window.location.origin}${pathname}${
    props ? `?${new URLSearchParams(props)}` : ""
  }`;
  window.history.pushState({}, "", url);
  if (window.history && window.history.pushState) {
    renderView(pathname, props);
  }

  // render the view passing props
  renderView(pathname, props);
  
};
export const onURLChange = (location) => {
  // parse the location for the pathname and search params

  const { pathname, search } = location;
  const props = queryStringToObject(search);
  renderView(pathname, props);
};
