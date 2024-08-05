let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes !== 'object') {
    throw new Error('Routes should be an object.');
  }
  if (!routes['/error']) {
    throw new Error('Routes should define an /error route.');
  }
  ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const queryObject = {};
  for (const [key, value] of params) {
    queryObject[key] = value;
  }
  return queryObject;
};

const renderView = (pathname, props = {}) => {
  if (!rootEl) {
    throw new Error('Root element is not set.');
  }

  // Clear the root element
  rootEl.innerHTML = '';

  // Find the correct view in ROUTES for the pathname
  const view = ROUTES[pathname] || ROUTES['/error'];

  // Render the correct view passing the value of props
  const viewEl = view(props);

  // Add the view element to the DOM root element
  rootEl.appendChild(viewEl);
};

export const navigateTo = (pathname, props = {}) => {
  // Update window history with pushState
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // Render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  const { pathname, search } = location;
  // Convert the search params to an object
  const queryObject = queryStringToObject(search);
  // Render the view with the pathname and query object
  renderView(pathname, queryObject);
};

// Set up the popstate event listener for back/forward navigation
window.onpopstate = () => {
  onURLChange(window.location);
};
