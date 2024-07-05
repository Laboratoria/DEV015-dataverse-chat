let ROUTES = {};

let rootEl;
// elemento del DOM que almacena el elemento contenido en el SPA

export const setRootEl = (el) => {
  rootEl = el;
  // parametro el -> Establece el elemento raíz donde se representarán las vistas, lo que le permite especificar en qué parte de su documento HTML aparecerá el contenido SPA.
};

// Esta función asigna el valor del argumento routes al objeto ROUTES. routesdebe ser un objeto (considere verificar que sea un objeto y arrojar un error si no es así). Utilice esta función para definir las rutas para su SPA.
export const setRoutes = (routes) => {
  // assign ROUTES
  Object.assign(ROUTES, routes);

  // optional Throw errors if routes isn't an object
  if (typeof routes !== "object") {
    throw new Error("routes debe ser un objeto");
  }
  // optional Throw errors if routes doesn't define an /error route
};

const queryStringToObject = (queryString) => {
  // una función de utilidad para convertir una cadena de search o query string(ejemplo ?name=Noemi&color=blue) en un objeto para acceder fácilmente a los parámetros de consulta. Convierte el valor de queryString y devuelve un objeto de pares key/valuecreados a partir de queryString (por ejemplo, { name: "Noemi", color: "blue" }). Puedes hacer esto usando URLSearchParamspara convertir la cadena en un tipo de datos iterable. Luego puedes usarlo for...ofo Object.fromEntriespara crear el objeto a partir del iterable.
  // for (const [key, value] of queryString) {
  // }
  // for (const [key, value] of queryString.entries()) {
  // }
  
  // convert query string to URLSearchParams
  const params = new URLSearchParams(queryString);
  // convert URLSearchParams to an object
  const obj = Object.entries(params.entries());
  // return the object
  return obj;
};

// RENDER VIEW---------------------------------------------------------------------
// esta función representa una vista en el elemento raíz especificado. Borra el contenido existente, busca la función de vista para el nombre de ruta y luego busca la vista. funciona en routes y llama a la función de vista pasando el valor propscomo argumento a la vista. Agrega el elemento DOM devuelto por la función de vista al elemento root.
const renderView = (pathname, props = {}) => {
  // limpia el contenido del DIV id "root"
  if (rootEl) {
    while (rootEl.firstChild) {
      rootEl.firstChild.remove();
    }
  } else {
    throw new Error("no existe un root para mostrar el contenido");
  }

  // encuentra la ruta del pathname
  const routePath = Object.values(ROUTES).find(
    (route) => route.path === pathname
  );

  // muestra el contenido de la pagina en el DIV id="root" con el valor "component"
  if (routePath && typeof routePath.component === "function") {
    const newHtml = routePath.component(props);
    rootEl.appendChild(newHtml);
  } else {
    throw new Error("la ruta no se encontro o el componente no existe");
  }
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
};

//---------------- NAVIGATE TO -------------------------------------------
export const navigateTo = (pathname, props = {}) => {
  // Esta función se utiliza para navegar mediante programación a una nueva ruta dentro del SPA (por ejemplo, hacer clic en botones o enlaces dentro de la aplicación). Actualiza la URL usando window.history.pushState y luego llama a renderView él pathname y los prop usdados para mostrar la vista correspondiente.
  // update window history with WINDOW.HISTORY.pushState

  // capturar la vista actual en el historial
  window.history.pushState({}, '', pathname);

  // render the view passing props
  renderView(pathname, props);
  // Nota: ya hablamos de una función renderView, podemos usarla dentro de navigateTo para mantener el código DRY (Don't Repeat Yourself, No te repitas)
};

// GUARDA LA RUTA EN EL HISTORIAL -----------------------------------
export const onURLChange = (location) => {
  // Esta función está destinada a manejar cambios de URL con popstate y también cuando la aplicación se carga la primera vez. Cuando la URL cambia, analiza el pathname y la search desde la location( window.location) y luego llama a renderView. Debes utilizar queryStringToObject para obtener los parámetros de la cadena de search en formato de objeto para pasar a renderView.
  // parse the location for the pathname and search params
  const { pathname, search } = location;
  // convert the search params to an object
  const props = queryStringToObject(search);
  // render the view with the pathname and object
  renderView(pathname, props);
};
