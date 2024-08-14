let routes = {};
let rootEl = null;

export function setRoutes(newRoutes) {
    routes = newRoutes;
}

export function setRootEl(el) {
    rootEl = el;
}

export function navigateTo(url, state = {}) {
    history.pushState(state, '', url);
    onURLChange(window.location);
}

export function onURLChange(location) {
    const path = location.pathname;
    const view = routes[path] || routes['/errorView'];
    const viewElement = view(history.state);
    rootEl.innerHTML = '';
    rootEl.appendChild(viewElement);
}

export function initRouter() {
    window.addEventListener('popstate', () => {
        onURLChange(window.location);
    });

    document.body.addEventListener('click', (event) => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.href);
        }
    });
}
