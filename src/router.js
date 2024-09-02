let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes !== 'object' || !routes['/']) {
    throw new Error('Invalid routes configuration');
  }
  ROUTES = routes;
};

export const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = ''; 
  const view = ROUTES[pathname] || ROUTES['/'];
  if (view) {
    rootEl.appendChild(view(props)); 
  }
  else{
    navigateTo("/404");
  }
};

export const navigateTo = (pathname = {}, props = {}) => {
  // Build the query string if there are parameters
  const queryString = Object.keys(props).length
    ? `?${new URLSearchParams(props)}`
    : "";
    
  // Build the full URL
  const url = `${window.location.origin}${pathname}${queryString}`;

  // Add a new state to the browser history
  window.history.pushState(props, "", url);

  // Render the corresponding view
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  const pathname = location.pathname;
  renderView(pathname);
};


export const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
  const params = new URLSearchParams(queryString);
  const paramsObject = Object.fromEntries(params);
  return paramsObject;
}


