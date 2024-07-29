import { setRoutes, setRootEl, navigateTo } from './router.js';
import { Home } from './Home.js';
import { About } from './About.js';

// Configurar las rutas
setRoutes({
    '/': Home,
    '/about': About,
});

// Configurar el elemento raíz
const rootElement = document.getElementById('root');
setRootEl(rootElement);

// Navegar a la ruta inicial
navigateTo(window.location.pathname);

// Configurar navegación de ejemplo (esto normalmente estaría en tu lógica de navegación)
document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
        e.preventDefault();
        navigateTo(e.target.getAttribute('href'));
    }
});
