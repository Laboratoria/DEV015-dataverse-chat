export let ROUTES = {};
export let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {  
  if (typeof routes !== 'object') {
    throw new Error("Routes should be an object");
  }

  if (!routes['/error']) {
    throw new Error("An '/error' route must be defined");
  }

  ROUTES = routes;
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
}; 

export const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const result = Object.fromEntries(params.entries())
  return result;
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
};

const renderView = (pathname, props={}) => {
  if (!rootEl) {
    return;
  }

  rootEl.innerHTML = ''; // Limpia el root

  const view = ROUTES[pathname] || ROUTES['/error'];
  rootEl.appendChild(view(props));

};

export const navigateTo = (pathname, props={}) => {
  const propsUrl = new URLSearchParams(props);
  const URL =  `${pathname}?${propsUrl.toString()}`;
  // update window history with pushState
  window.history.pushState({}, '', URL); 
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = () => {
  const { pathname, search } = window.location;
  const props = queryStringToObject(search);
  renderView(pathname, props);

};
// parse the location for the pathname and search params
// convert the search params to an object
// render the view with the pathname and object
window.addEventListener('popstate', onURLChange);