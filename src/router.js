
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;

  return rootEl;
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  
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

  // clear the root element
  rootEl.innerHTML = ""
  const viewPath = ROUTES[location.pathname];

  if(!viewPath){
    navigateTo("/error");
    throw new Error("Invalid viewPath");
  }
  const component = viewPath(props) 
  rootEl.append(component);

}

export const navigateTo = (pathname, props = {}) => {
  // Esta función se utiliza para navegar mediante programación a una nueva ruta dentro del SPA (por ejemplo, hacer clic en botones o enlaces dentro de la aplicación). Actualiza la URL usando window.history.pushState y luego llama a renderView él pathname y los prop usdados para mostrar la vista correspondiente.
  // update window history with WINDOW.HISTORY.pushState
  
  // capturar la vista actual en el historial
  window.history.pushState({}, '', pathname);
  
  // render the view passing props
  renderView(pathname, props);
  // Nota: ya hablamos de una función renderView, podemos usarla dentro de navigateTo para mantener el código DRY (Don't Repeat Yourself, No te repitas)
};
export const onURLChange = (location) => {
  
  // parse the location for the pathname and search params
  
  const { pathname, search } = location;
  // console.log('este es el pathname --->' + pathname)
  // console.log('este es el search --->' + search)
  // convert the search params to an object
  const props = queryStringToObject(search);
  // render the view with the pathname and object
  renderView(pathname, props);
};
