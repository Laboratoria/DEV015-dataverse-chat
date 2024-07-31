
// import { filterData, ordenarABC} from '../dataFunctions.js';
import { renderItems } from '../components/componentsCards.js';
import { createSelectElements } from '../components/componentsSelect.js';
import { createHeader } from '../components/componentsHeader.js';
import { createFooter } from '../components/componentsFooter.js';
import data from '../data/dataset.js';

export const Home = () => {
  const container = document.createElement('div');
  container.className = 'containerHome';
  const containerHeader = document.createElement('div');
  containerHeader.className = 'containerHeaderHome'
  const containerBody = document.createElement('div');
  containerBody.className = 'containerBodyHome'
  const containerFooter = document.createElement('div');
  containerFooter.className = 'containerFooterHome'

  const header = createHeader();

  const selectElements = createSelectElements();
  const datadetarjetas = renderItems(data);

  const footer = createFooter();

  containerHeader.appendChild(header);
  containerBody.appendChild(selectElements);
  containerBody.appendChild(datadetarjetas);
  containerFooter.appendChild(footer);  

  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  container.appendChild(containerFooter);  

  return container;

  

}



/*
const tarjetadedata = document.querySelector('#root');
const datadetarjetas = renderItems(data);

// tarjetadedata.appendChild(datadetarjetas);


const selectCategoria = document.querySelector('#filtro-categoria');
const selectAño = document.querySelector('#filtro-año');
const selectRanking = document.querySelector('#filtro-ranking');
const selectOrdenar = document.querySelector('#ordenar');


// let appliedFilters = {
//   category: 'seleccionar',
//   yearOfCreation: 'seleccionar',
//   ranking: 'seleccionar',
//   orden: 'seleccionar',
// };

// const applyFilters = () => {
//   let filteredData = data;

//   if (appliedFilters.category !== 'seleccionar') {
//     filteredData = filterData(filteredData, 'facts.category', appliedFilters.category);
//   }


//   if (appliedFilters.yearOfCreation !== 'seleccionar') {
//     filteredData = filterData(filteredData, 'facts.yearOfCreation', appliedFilters.yearOfCreation);
//   }

//   if (appliedFilters.ranking !== 'seleccionar') {
//     filteredData = filterData(filteredData, 'facts.ranking', appliedFilters.ranking);
//   }

//   if (appliedFilters.orden !== 'seleccionar') {
//     filteredData = ordenarABC(filteredData, appliedFilters.orden);
//   }
//   tarjetadedata.innerHTML = '';

//   if (filteredData.length === 0) {
//     const noResultsMessage = document.createElement('h3');
//     noResultsMessage.textContent = 'No se encontraron coincidencias';
//     tarjetadedata.appendChild(noResultsMessage);

//   } else {
//     const filteredItems = renderItems(filteredData);
//     tarjetadedata.appendChild(filteredItems);
//   }
// };

// applyFilters();

// selectCategoria.addEventListener('change', (event) => {
//   appliedFilters.category = event.target.value;
//   applyFilters();
// });

// selectAño.addEventListener('change', (event) => {
//   appliedFilters.yearOfCreation = event.target.value;
//   applyFilters();
// });

// selectRanking.addEventListener('change', (event) => {
//   appliedFilters.ranking = event.target.value;
//   applyFilters();
// });

// selectOrdenar.addEventListener('change', (event) => {
//   appliedFilters.orden = event.target.value;
//   applyFilters();
// });


// const botonLimpiar = document.querySelector('.limpiar-filtros');
// function limpiarFiltros() {
//   selectCategoria.selectedIndex = 'Seleccionar';
//   selectAño.selectedIndex = 'Seleccionar';
//   selectRanking.selectedIndex = 'Seleccionar';
//   selectOrdenar.selectedIndex = 'Seleccionar';

//   appliedFilters = {
//     category: 'seleccionar',
//     yearOfCreation: 'seleccionar',
//     ranking: 'seleccionar',
//     orden: 'seleccionar',
//   };
//   tarjetadedata.innerHTML = '';

//   tarjetadedata.appendChild(datadetarjetas);
// }

// botonLimpiar.addEventListener("click", limpiarFiltros);

*/


/*
// document.addEventListener('DOMContentLoaded', function () {
//   const menuHamburguesa = document.getElementById('menu-hamburguesa');
//   const barraLateral = document.getElementById('barra-lateral');


  menuHamburguesa.addEventListener('click', function () {
    barraLateral.classList.toggle('barra-lateral-desplegada');
  });
})
*/

