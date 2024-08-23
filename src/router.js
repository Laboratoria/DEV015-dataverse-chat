
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el
  return rootEl //llama al root que está en el main.js
}


export const setRoutes = (routes) => {
  ROUTES = routes 
  return ROUTES
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
  rootEl.innnerHTML = '';
  // clear the root element
  const vistaPathname = ROUTES[pathname] || ROUTES["/page-error"]; // Manejar rutas no definidas
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  const viewElement = vistaPathname (props);
  rootEl.append (viewElement)
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  const { pathname, search } = location
  const props = queryStringToObject (search)
  renderView (pathname,props)
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}