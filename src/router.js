//implementa las partes del router siguiendo la API = CODIFICA EL ROUTER


// definimos las 2 variables
let ROUTES = {};
let rootEl;

// funcion con el elemento raiz donde se mostraran las vistas
export function setRootEl(element) {
  rootEl = element;// Asignar rootEl
}

// Funciones
export function setRoutes(routes) {
    if (typeof routes !== 'object' || routes === null) {
        throw new Error('El argumento routes debe ser un objeto');
    }
    ROUTES = routes;
}

/* export function queryStringToObject(queryString) {
    return queryString
        ? JSON.parse('{"' + decodeURI(queryString.substring(1).replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}')
        : {};
} */

export function queryStringToObject(queryString) {
    if (queryString) {
        const resultado = JSON.parse('{"' + decodeURI(queryString.substring(1).replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}');
        return resultado;
    } else {
        return {};
    }
}

// Renderizar la vista correspondiente a una ruta
export function renderView(pathname, props = {}) {
    if (rootEl) {
        // Borra el contenido existente
        rootEl.innerHTML = '';
        const viewFunction = ROUTES[pathname];
        if (viewFunction) {
            const viewElement = viewFunction(props);
            // rootEl.innerHTML = viewElement;
            rootEl.appendChild(viewElement);
        } else {
            rootEl.innerHTML = '<h1>404 - Página no encontrada</h1>';
        }
    } else {
        console.error('Elemento raíz no está definido. Usa setRootEl para definirlo.');
    }
}

export function navigateTo(pathname, props = {}) {
    // Actualizar el historial del navegador con pushState
    window.history.pushState({}, '', pathname);
    // Renderizar la vista con el pathname y props
    renderView(pathname, props);
};

export function onURLChange(location) {
    const pathname = location.pathname;
    renderView(pathname);
}

