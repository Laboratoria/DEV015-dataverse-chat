let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes !== 'object') {
    throw new Error('Invalid routes configuration');
  }

  if (!routes["/404"]) {
    throw new Error("la vista de error no existe");
  }

  ROUTES = routes;
};

export const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = ''; 
  
  const view = ROUTES[pathname];
  if (!view) {
    navigateTo("/404");
    return;
  } 
  
  const component = view(props);
  rootEl.append(component);
};

export const navigateTo = (pathname = {}, props = {}) => {
  console.log("navigateTo called with:", pathname, props);

  // Build the query string if there are parameters
  const queryString = Object.keys(props).length
    ? `?${new URLSearchParams(props)}`
    : "";

  // Build the full URL
  const url = `${window.location.origin}${pathname}${queryString}`;

  // Avoid navigating to the same URL repeatedly
  if (url === window.location.href) {
    console.log("Already at the desired URL, no need to navigate.");
    return;
  }

  // Add a new state to the browser history
  window.history.pushState(props, "", url);

  // Render the corresponding view
  renderView(pathname, props);

  // Ensure the page scrolls to the top after rendering the view
  window.scrollTo(0, 0);
};

export const onURLChange = (pathname) => {
  const { search } = window.location;
  //console.log("cambio de url", pathname, search);
  const props = queryStringToObject(search);
  renderView(pathname, props);
};


export const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
  const params = new URLSearchParams(queryString);
  const paramsObject = Object.fromEntries(params);
  return paramsObject;
}


