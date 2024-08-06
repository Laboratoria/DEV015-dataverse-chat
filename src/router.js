//implementa las partes del router siguiendo la API = CODIFICA EL ROUTER

// definimos las 2 variables
let ROUTES = {};
let rootEl;

// Estable el elemento raíz
export const setRootEl = (el) => { //elemento dom
  rootEl = el; // rootEl es una variable global
};

// Configura las rutas y define la ruta errorView
export const setRoutes = (routes) => {
  if (typeof routes !== 'object' || routes === null) { // Si routes no es un objeto, es nulo.
    throw new Error('Routes must be an object');
  }
  if (!routes['/errorView']) {
    throw new Error('Routes must define an /error route');
  }
  ROUTES = routes; // Asigna el objeto routes a una variables ROUTES, que se usará en renderview para mostrar las diferentes rutas.
};

// Convierte un query string en un objeto
const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
};

// Renderiza la vista basada en la ruta pahtname y propiedades props
const renderView = (pathname, props = {}) => {
  if (!rootEl) {  // Verivifica que el elemento rootEl este definido, sino lanza error
    throw new Error('Root element is not set');
  }
  rootEl.innerHTML = ''; // Limpia el contenido error

  const viewFunction = ROUTES[pathname] || ROUTES['/errorView']; // Busca la funcion de vista a través del pathname, sino la encuentra recurre a la vista error.
  const viewElement = viewFunction(props); // Crea el elemento de vista usando los props para crear dom
  rootEl.appendChild(viewElement); // agrega viewElement a root
};

// Navega a una nueva ruta y actualiza el historial, renderiza la vista que corresponde
export const navigateTo = (pathname, props = {}) => {
  window.history.pushState(props, '', pathname); // pushState, crea una nueva entrada en el historial de navegación del navegador, guarda el props.
  onURLChange(window.location); // Llama a la funcion onurlchange para que actualice la url y renderice la url correcta.
};

// Maneja los cambios de URL cuando el historial del navegador cambia o al cargar la página inicialmente
export const onURLChange = (location) => { // extrae ruta y parametros de consulta
  const pathname = location.pathname;
  const searchParams = location.search;
  const props = queryStringToObject(location.search);
  renderView(pathname, props, searchParams);
}; // se usa esta funcion y navigateto cada vez que se actualice una url

// Inicia y configura el enrutador, maneja los cambios en el historial
export const initRouter = () => {
    window.onpopstate = (event) => { // evento que se dispara con el avanzar retroceder del historial
      onURLChange(window.location);
    };
  };
  