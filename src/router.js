
let ROUTES = {}; //funciones de la API Almacenaa informacion sobre las rutas delSPA
let rootEl = "";//funciones de la API ELEMENTO DOM almacena el elemento donde el contenido aparece

export const setRootEl = (el) => { //FUNCION PARA DEFINIR LAS RUTAS 
  rootEl = el; //assing rootel // funcion con paramentro el elemento da la raiz de las vistas permite decir en que parte del doc aparcera SPA
};
export const setRoutes = (routes) => {
  ROUTES = routes; //assing routes
};

const queryStringToObject = (queryString) => { //CPONVIERTE UNA CADENA DE BUSQUEDA EN UN OBJETO SEGUN LOS PARAMETROS DED CONSULTA
  const params = new URLSearchParams(queryString);   // convert query string to URLSearchParams

  return Object.fromEntries(params.entries());   // convert URLSearchParams to an object and return the object

};

const renderView = (pathName, props = {}) => {//FUNCIONA EN ROUTES LALMA A LA FUNCION PASANDO POPS Y AGREGA EL ELEMENTO AL DOM EN ROOT
  //let template;
  const root =  rootEl
  root.innerHTML = "";
  rootEl.innerHTML = "";   // clear the root element
  // if (ROUTES [pathName])  {template = ROUTES [pathName];
  //} else {
  // {template = ROUTES ["/error"]
  //}
    


  const viewFunc = ROUTES[pathName];   // find the correct view in ROUTES for the pathname

  if (!viewFunc) {
    return navigateTo("/page/404");   // in case not found render the error view

  }
  const viewEl = viewFunc(props);   // render the correct view passing the value of props

  rootEl.appendChild(viewEl);  // add the view element to the DOM root element

};

export const navigateTo = (pathname, props = {}) => {//NAVEGA A UN ARYTA DENTRO DEL SPA
  window.history.pushState({}, pathname, window.location.origin + pathname);  //ACTUALIZA EL URL

  renderView(pathname, props);  // render the view with the pathname and props
//LLAMA A LA FUNCION CON EL PATHNAME Y LOS PROPS
};

export const onURLChange = () => {//MANEJA LOS CAMBIOS DEL URL 
  const { pathname, search } = window.location;// parse the location for the pathname and search params
  const props = queryStringToObject(search); // convert the search params to an object
  renderView(pathname, props); // render the view with the pathname and object
};
window.addEventListener('popstate', onURLChange);
