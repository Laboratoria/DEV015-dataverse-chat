
let ROUTES = {};
let rootEl = "";

export const setRootEl = (el) => {
  rootEl = el; //assing rootel
};
export const setRoutes = (routes) => {
  ROUTES = routes; //assing routes
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);   // convert query string to URLSearchParams

  return Object.fromEntries(params.entries());   // convert URLSearchParams to an object and return the object

};

const renderView = (pathName, props = {}) => {
  rootEl.innerHTML = "";   // clear the root element


  const viewFunc = ROUTES[pathName];   // find the correct view in ROUTES for the pathname

  if (!viewFunc) {
    return navigateTo("/page/404");   // in case not found render the error view

  }
  const viewEl = viewFunc(props);   // render the correct view passing the value of props

  rootEl.appendChild(viewEl);  // add the view element to the DOM root element

};

export const navigateTo = (pathname, props = {}) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);  // update window history with pushState

  renderView(pathname, props);  // render the view with the pathname and props

};

export const onURLChange = () => {
  const { pathname, search } = window.location;// parse the location for the pathname and search params
  const props = queryStringToObject(search); // convert the search params to an object
  renderView(pathname, props); // render the view with the pathname and object
};
