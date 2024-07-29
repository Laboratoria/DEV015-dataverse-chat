// Variables
let ROUTES = {};
let rootEl = null;

// Funciones
function setRoutes(routes) {
    ROUTES = routes;
}

function setRootEl(element) {
    rootEl = element;
}

function onURLChange() {
    const path = window.location.pathname;
    if (ROUTES[path]) {
        rootEl.innerHTML = '';
        rootEl.appendChild(ROUTES[path]());
    } else {
        rootEl.innerHTML = '404 - Page Not Found';
    }
}

function navigateTo(path) {
    window.history.pushState({}, path, window.location.origin + path);
    onURLChange();
}

// Inicializar el evento popstate para manejar el historial del navegador
window.addEventListener('popstate', onURLChange);

// Exportar funciones
export { setRoutes, setRootEl, navigateTo };
