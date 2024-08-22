import { navigateTo } from '../router.js';

export default function Home(props) {
  const viewEl = document.createElement('div');
  
  viewEl.innerHTML = `
   <p>¡Bienvenidos a "Mundo Sailor"! 🌙✨ Sumérgete en el fascinante universo de Sailor Moon, la emblemática serie creada por Naoko Takeuchi. Aquí encontrarás información sobre las valientes Sailor Scouts, quienes luchan por el amor y la justicia. Explora nuestras secciones para conocer a tus personajes favoritos y disfruta de la magia y el poder de la luna. ¡Descubre todo lo que el mundo de Sailor Moon tiene para ofrecerte!</p>
  `;

  // Crea un enlace para navegar a la página "Cards"
  const linkEl = document.createElement('a');
  linkEl.href = '#'; // Previene la acción predeterminada del enlace
  linkEl.textContent = 'Ir a mundo Sailor';

  // Agrega un manejador de eventos al enlace
  linkEl.addEventListener('click', (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    navigateTo("/", { name: "Xochitl", id: "100" }); // Navega a la página "cards" con propiedades
    navigateTo('/character');

  });

  // Añade el enlace al elemento de vista
  viewEl.appendChild(linkEl);

  // Devuelve el elemento de vista
  return viewEl;
};



