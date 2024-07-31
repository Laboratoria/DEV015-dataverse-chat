// import data from '../data/dataset.js';
// import { filterData, ordenarABC } from '../dataFunctions.js';
// import { renderItems } from './componentsCards.js';

export function createSelectElements() {
  const container = document.createElement('div');
  container.classList.add('contenedor');

  const sidebar = document.createElement('div');
  sidebar.classList.add('barra-lateral');
  sidebar.id = 'barra-lateral';

  const filtros = document.createElement('div');
  filtros.classList.add('filtros');

  // Crear y añadir el filtro de categoría
  const labelCategoria = document.createElement('label');
  labelCategoria.textContent = 'Categoría:';
  const selectCategoria = document.createElement('select');
  selectCategoria.id = 'filtro-categoria';
  selectCategoria.name = 'select';
  const categorias = ['Seleccionar', 'Acción', 'Aventura', 'Rol (RPG)', 'Estrategia'];
  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.textContent = categoria;
    selectCategoria.appendChild(option);
  });

  filtros.appendChild(labelCategoria);
  filtros.appendChild(selectCategoria);

  // Crear y añadir el filtro de año
  const labelAño = document.createElement('label');
  labelAño.textContent = 'Año:';
  const selectAño = document.createElement('select');
  selectAño.id = 'filtro-año';
  const años = ['Seleccionar', '2010', '2011', '2012', '2013', '2015', '2016', '2017', '2018', '2019', '2020'];
  años.forEach(año => {
    const option = document.createElement('option');
    option.textContent = año;
    selectAño.appendChild(option);
  });

  filtros.appendChild(labelAño);
  filtros.appendChild(selectAño);

  // Crear y añadir el filtro de ranking
  const labelRanking = document.createElement('label');
  labelRanking.textContent = 'Ranking:';
  const selectRanking = document.createElement('select');
  selectRanking.id = 'filtro-ranking';
  const rankings = ['Seleccionar', '5.0', '4.5', '4.0', '3.5'];
  rankings.forEach(ranking => {
    const option = document.createElement('option');
    option.textContent = ranking;
    selectRanking.appendChild(option);
  });

  filtros.appendChild(labelRanking);
  filtros.appendChild(selectRanking);

  // Crear y añadir el filtro de orden alfabético
  const labelOrden = document.createElement('label');
  labelOrden.textContent = 'Orden alfabético:';
  const selectOrden = document.createElement('select');
  selectOrden.id = 'ordenar';
  const ordenes = ['Seleccionar', 'Ascendente', 'Descendente'];
  ordenes.forEach(orden => {
    const option = document.createElement('option');
    option.textContent = orden;
    selectOrden.appendChild(option);
  });

  filtros.appendChild(labelOrden);
  filtros.appendChild(selectOrden);

  // Crear y añadir el botón de limpiar filtros
  const buttonLimpiar = document.createElement('button');
  buttonLimpiar.classList.add('limpiar-filtros');
  buttonLimpiar.innerHTML = '<b>Limpiar</b>';

  filtros.appendChild(buttonLimpiar);

  sidebar.appendChild(filtros);
 

  const rankingPorAño = document.createElement('div');
  rankingPorAño.id = 'rankingPorAño';
  rankingPorAño.innerHTML = `
      <p>Ranking Promedio</p>
      <p><b>2016</b></p>
      <h2 id="rankingPromedio2016"></h2>
  `;
  sidebar.appendChild(rankingPorAño);

  const mejorCategoria = document.createElement('div');
  mejorCategoria.id = 'mejorCategoria';
  mejorCategoria.innerHTML = `
      <p>Mejor Rankeado</p>
      <p><b>Categoria</b></p>
      <h2 id="mejorRanking"></h2>
  `;
  sidebar.appendChild(mejorCategoria);

  container.appendChild(sidebar);

  return sidebar;

}


// agregar los filtros 

// const tarjetadedata = document.querySelector('#root');
// const datadetarjetas = renderItems(data);

// tarjetadedata.appendChild(datadetarjetas);


// const selectCategoria = document.querySelector('#filtro-categoria');
// const selectAño = document.querySelector('#filtro-año');
// const selectRanking = document.querySelector('#filtro-ranking');
// const selectOrdenar = document.querySelector('#ordenar');


// const appliedFilters = {
//   category: 'seleccionar',
//   yearOfCreation: 'seleccionar',
//   ranking: 'seleccionar',
//   orden: 'seleccionar',
// };

// export const applyFilters = () => {
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



// const calcularRankingPromedio = (data, year) => {

//   const juegosDelAño = data.filter(item => item.facts.yearOfCreation === year);
//   const sumaDeRankings = juegosDelAño.reduce((sum, item) => sum + parseFloat(item.facts.ranking), 0);
//   const rankingPromedio = sumaDeRankings / juegosDelAño.length;
//   return rankingPromedio;
// };

// const rankingPromedio2016 = calcularRankingPromedio(data, "2016");
// const rankingAv2016 = document.getElementById('rankingPromedio2016');
// rankingAv2016.textContent = `${rankingPromedio2016.toFixed(1)}`;



// // género mejor rankeado 

// function generoMejorRankeado(data) {
//   const resultado = data.reduce((acc, juego) => {
//     const categoria = juego.facts.category;
//     const ranking = parseFloat(juego.facts.ranking);

//     if (!acc[categoria]) {
//       acc[categoria] = { totalRanking: 0, count: 0 };
//     }

//     acc[categoria].totalRanking += ranking;
//     acc[categoria].count += 1;

//     return acc;
//   }, {});

//   let mejorCategoria = null;
//   let mejorPromedio = 0;

//   for (const categoria in resultado) {
//     const promedio = resultado[categoria].totalRanking / resultado[categoria].count;
//     if (promedio > mejorPromedio) {
//       mejorPromedio = promedio;
//       mejorCategoria = categoria;
//     }
//   }

//   return mejorCategoria;
// }

// const mejorRanking = generoMejorRankeado(data);
// const mejorGenero = document.getElementById('mejorRanking');
// mejorGenero.textContent = `${(mejorRanking)}`;

// document.addEventListener('DOMContentLoaded', function () {
//   const menuHamburguesa = document.getElementById('menu-hamburguesa');
//   const barraLateral = document.getElementById('barra-lateral');


//   menuHamburguesa.addEventListener('click', function () {
//     barraLateral.classList.toggle('barra-lateral-desplegada');
//   });
// })