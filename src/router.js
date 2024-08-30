//Este objeto se utilizará para almacenar las rutas de la aplicación
let ROUTES = {};
//Esta variable almacenará el elemento raíz (root)
let rootEl;

// Esta función toma un parámetro el, que representa el elemento raíz del DOM
export const setRootEl = (el) => {
  //configura cuál será el contenedor principal de la aplicación 
  rootEl = el;
  //verificar que el rootEl se haya configurado correctamente.
  return rootEl; // Llama al root que está en el main.js
};

//es un objeto que mapea rutas a vistas o componentes.
export const setRoutes = (routes) => {
  //establece las rutas disponibles en la aplicación.
  ROUTES = routes;
  //verificar que el ROUTER se haya configurado correctamente.

  return ROUTES;
};

//convierte una cadena de consulta(query string)en un objeto JS.
const queryStringToObject = (queryString) => {
  //Crea una instancia de URLSearchParams, que permite trabajar con cadenas de consulta
  const params = new URLSearchParams(queryString);
  //se almacenarán las claves y valores de la cadena de consulta.
  const result = {};
  //Recorre cada par clave-valor en params y los asigna al objeto result.
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  //contiene todos los parámetros de la cadena de consulta como propiedades del objeto
  return result;
};
// renderiza la vista correspondiente a una ruta específica.
const renderView = (pathname, props = {}) => {
  //Limpia el contenido actual del rootEl, eliminando cualquier vista previamente renderizada.
  rootEl.innerHTML = ''; // Limpia el contenido del elemento root
  //Busca en el objeto ROUTES la vista correspondiente al pathname
  const vistaPathname = ROUTES[pathname] || ROUTES["/page-error"]; // Manejar rutas no definidas
  //Llama a la función o componente asociado con la ruta, pasándole los props como argumento
  const viewElement = vistaPathname(props); // Renderiza la vista correcta
  //Añade el viewElement generado al rootEl
  rootEl.append(viewElement);
};

//que permite navegar a una nueva ruta sin recargar la página
export const navigateTo = (pathname, props = {}) => {
  //Usa pushState del history del navegador para cambiar la URL sin recargar la página
  window.history.pushState({}, pathname, window.location.origin + pathname);
  //Llama a renderView para renderizar la vista correspondiente a la nueva ruta, pasando cualquier props que sean necesarios.
  renderView(pathname, props);
};

// se ejecuta cuando cambia la URL
export const onURLChange = (location) => {
  //extrae el pathname (la ruta) y search (la cadena de consulta) del objeto location.
  const { pathname, search } = location;
  //convierte la cadena de consulta en un objeto props que se puede pasar a la vista correspondiente.
  const props = queryStringToObject(search);
  renderView(pathname, props);
};
