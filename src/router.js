
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  ROUTES = routes;
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
  const params = new URLSearchParams(queryString);
  const results = {};
  for (const [key, value] of mySearchParams) {
    results[key] = value;
} 
  return results;
}

const renderView = (pathname, props={}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  rootEl.innerHTML = '';
  const view = ROUTES[pathname];

  if (!view) {
    const errorView = ROUTES['/error'];
    if (errorView) {
      const errorElement = errorView(props);
      rootEl.appendChild(errorElement);
    } else {
      console.error("Error view not defined in ROUTES");
    }
    return;
  }
  const viewElement = view(props);
  rootEl.appendChild(viewElement);
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
  window.history.pushState(props, '', pathname);
  renderView(pathname, props);
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  const pathname = location.pathname
  const searchParams = location.search
  const searchParamsObject = queryStringToObject(searchParams)
  renderView(pathname,searchParamsObject)
}