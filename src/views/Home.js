// este es un componente, cada vista es un componente 
// Definir funciones/componentes similares para otras rutas

// src/views/Home.js

export function Home(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'Welcome to the home page!';

  console.log(Home);

  return viewEl;
}

// src/views/About.js

export function About(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'This is the About page.';
  return viewEl;
}

// Definir funciones/componentes similares para otras rutas




