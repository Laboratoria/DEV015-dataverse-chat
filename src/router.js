let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes !== 'object' || !routes['/']) {
    throw new Error('Invalid routes configuration');
  }
  ROUTES = routes;
};

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = ''; 
  const view = ROUTES[pathname] || ROUTES['/'];
  if (view) {
    rootEl.appendChild(view(props)); 
  }
};

export const navigateTo = (pathname, props = {}) => {
  window.history.pushState({}, '', pathname);
  onURLChange(new URL(window.location.href));

};

export const onURLChange = (location) => {
  const pathname = location.pathname;
  renderView(pathname);
};



