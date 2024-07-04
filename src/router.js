let ROUTES = {};
let rootEl;
// elemento del DOM que almacena el elemento contenido en el SPA

export const setRootEl = (el) => {
  // parametro el -> Establece el elemento raíz donde se representarán las vistas, lo que le permite especificar en qué parte de su documento HTML aparecerá el contenido SPA. 
};

export const setRoutes = (routes) => {
  // Esta función asigna el valor del argumento routes al objeto ROUTES. routesdebe ser un objeto (considere verificar que sea un objeto y arrojar un error si no es así). Utilice esta función para definir las rutas para su SPA.
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
};

const queryStringToObject = (queryString) => {
  // una función de utilidad para convertir una cadena de searcho query string(ejemplo ?name=Noemi&color=blue) en un objeto para acceder fácilmente a los parámetros de consulta. Convierte el valor de queryString y devuelve un objeto de pares key/valuecreados a partir de queryString (por ejemplo, { name: "Noemi", color: "blue" }). Puedes hacer esto usando URLSearchParamspara convertir la cadena en un tipo de datos iterable. Luego puedes usarlo for...ofo Object.fromEntriespara crear el objeto a partir del iterable.
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
};

const renderView = (pathname, props = {}) => {
  // esta función representa una vista en el elemento raíz especificado. Borra el contenido existente, busca la función de vista para el nombre de ruta y luego busca la vista. funciona en routes y llama a la función de vista pasando el valor propscomo argumento a la vista. Agrega el elemento DOM devuelto por la función de vista al elemento root.
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
};

export const navigateTo = (pathname, props = {}) => {
  // Esta función se utiliza para navegar mediante programación a una nueva ruta dentro del SPA (por ejemplo, hacer clic en botones o enlaces dentro de la aplicación). Actualiza la URL usando window.history.pushStatey luego llama a renderViewél pathname y los propsdados para mostrar la vista correspondiente.
  // update window history with pushState
  // render the view with the pathname and props
};

export const onURLChange = (location) => {
  // Esta función está destinada a manejar cambios de URL con popstatey también cuando la aplicación se carga la primera vez. Cuando la URL cambia, analiza el pathnamey la search desde la location( window.location) y luego llama a renderView. Debes utilizar queryStringToObjectpara obtener los parámetros de la cadena de searchen formato de objeto para pasar a renderView.
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
};
