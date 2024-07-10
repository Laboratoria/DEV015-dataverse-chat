
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  ROUTES = routes
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => { //props son los search params
  // clear the root element
  rootEl.innerHTML = ""
  // find the correct view in ROUTES for the pathname
  const viewPath = ROUTES[location.pathname]
  const component = viewPath()
  rootEl.append(component)
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  console.log(location, location.pathname);
  renderView(location.pathname);
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}
