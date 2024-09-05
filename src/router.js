import renderChat from "./views/chat.js"; 

let routes = {};
let rootEl = null;

export function setRoutes(ROUTES) {
  routes = ROUTES;
}

export function setRootEl(rootElement) {
  rootEl = rootElement;
}

// Convierte la cadena de consulta en un objeto
export function queryStringToObject(queryString) {
  const queryParams = new URLSearchParams(queryString);
  const result = {}; // Va ha almacenar los parametros de búsqueda.
  queryParams.forEach((value, key) => {
    result[key] = value;
  });
  return result; 
}

// Actualiza el historial del navegador y renderiza la vista
export function navigateTo(pathname, props = {}) {
  // Construir la nueva URL usando pathname, id y name solo si están definidos
  const newPath = `${pathname}${props.id ? `/${props.id}` : ''}${props.name ? `/${props.name}` : ''}`;

  // Actualizar la URL sin recargar la página
  history.pushState(props, '', newPath);

  // Crea una nueva URL para obtener pathname y los parámetros de consulta
  const location = new URL(pathname, window.location.origin);
  const newPathname = location.pathname; // Cambia el nombre de la variable
  const newProps = queryStringToObject(location.search); // Cambia el nombre de la variable

  // Renderiza la vista correspondiente
  renderView(newPathname, newProps);
}

export function renderView(pathname, queryParams) {
  // Verifica si la ruta es exactamente igual a una ruta en el objeto routes
  if (routes[pathname]) {
    const view = routes[pathname];
    const viewElement = view(queryParams);
    rootEl.innerHTML = ""; // Limpia el contenido actual de root
    rootEl.appendChild(viewElement);
  } else {
    // Manejo de rutas dinámicas como /chat/:id
    const chatRouteMatch = pathname.match(/^\/chat\/(\d+)(?:\/([^/]+))?$/);
    if (chatRouteMatch) {
      const characterId = chatRouteMatch[1]; // Extrae el ID del personaje
      const viewElement = renderChat({ id: characterId });
      rootEl.innerHTML = "";
      rootEl.appendChild(viewElement); 
    } else {
      // Si no coincide con ninguna ruta, renderiza la vista de error
      const errorView = routes["/errorView"];
      const viewElement = errorView();
      rootEl.innerHTML = "";
      rootEl.appendChild(viewElement);
    }
  }
}

// Controla lo cambios en la URL
export function onURLChange(location) {
  const path = location.pathname;
  const queryParams = queryStringToObject(location.search);
  renderView(path, queryParams);
}

window.addEventListener("popstate", () => {
  onURLChange(window.location);
});
   
