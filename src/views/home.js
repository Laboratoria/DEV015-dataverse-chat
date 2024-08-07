import { navigateTo } from '../router.js';
//import { data } from '../dataset.js';
//import { filterData, sortData } from '../dataFunctions.js';

export default function Home(props) {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>DataVerse</h1>
    <div id="data-view"></div>
  `;
  console.log(props.id);

  // Crea un enlace para navegar a la página "Cards"
  const linkEl = document.createElement('a');
  linkEl.href = '#'; // Previene la acción predeterminada del enlace
  linkEl.textContent = 'Go to Cards Page';

  // Agrega un manejador de eventos al enlace
  linkEl.addEventListener('click', (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    navigateTo("/", { name: "Xochitl", id: "100" }); // Navega a la página "cards" con propiedades
    navigateTo('/cards');
    
  });

  // Añade el enlace al elemento de vista
  viewEl.appendChild(linkEl);

  // Devuelve el elemento de vista
  return viewEl;
};
 

  
