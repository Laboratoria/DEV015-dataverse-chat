import { navigateTo } from './router.js';


export const Home = (props) => {
  const viewEl = document.createElement('div');
  viewEl.textContent = `¡Bienvenido a la página de inicio, ${props.name}!`;
  console.log(`ID: ${props.id}`);
}
// Crear el elemento del enlace
const linkEl = document.createElement('a');
linkEl.href = '#'; // Previene el comportamiento predeterminado del enlace
linkEl.textContent = 'Go to About Page';

// Agrega el evento de clic
linkEl.addEventListener('click', (event) => {
  event.preventDefault(); // Previene la acción predeterminada del enlace
  navigateTo("/about", { nombre: "Xóchitl", id: "100" }); // Cambia la vista a la página de About
});

// Añadir el enlace al contenedor de la vista
viewEl.appendChild(linkEl);

// Retornar el elemento de vista
return viewEl;

