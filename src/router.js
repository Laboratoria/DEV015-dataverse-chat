
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;

  return rootEl;
}

export const setRoutes = (routes) => {
  
  if(typeof routes === "object"){
    if(routes['/error']){
      ROUTES = routes;
    }
  }
  return ROUTES;
}

export const queryStringToObject = (queryString) => {
  const urlSearchParams = new URLSearchParams(queryString);
  return Object.fromEntries(urlSearchParams);
  
}

export const renderView = (pathname, props={}) => { //props son los search params

  rootEl.innerHTML = ""
  const viewPath = ROUTES[location.pathname];

  if(!viewPath){
    navigateTo("/error");
    return;
  }
  const component = viewPath(props) 
  rootEl.append(component);

}

export const navigateTo = (pathname, props = {}) => {
 
  const url = `${window.location.origin}${pathname}${props ? `?${new URLSearchParams(props)}` : "" }` 
  window.history.pushState({}, '', url );
  if (window.history && window.history.pushState) {
    renderView(pathname, props)
  }
  
  renderView(pathname, props);
  
};
export const onURLChange = (location) => {
  
  const { pathname, search } = location;
  const props = queryStringToObject(search);
  renderView(pathname, props);
};
