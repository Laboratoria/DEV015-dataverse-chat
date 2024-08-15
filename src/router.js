let rootEl;

export function setRootEl(el) {
  rootEl = el;
}

export function setRoutes(routes) {
  window.routes = routes;
}

export function onURLChange(location) {
  const path = location.pathname;
  const route = window.routes[path] || window.routes['/error'];
  const view = route();
  
  rootEl.innerHTML = ''; // Limpia el contenedor antes de agregar la nueva vista
  rootEl.appendChild(view);
}

export function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  onURLChange(window.location);
}
