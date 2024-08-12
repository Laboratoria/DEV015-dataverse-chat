import { filterData, ordenarABC, generoMejorRankeado, calcularRankingPromedio} from "../lib/dataFunctions.js";
import data from '../data/dataset.js';
import { renderItems } from './componentsCards.js';

const containerBody = document.querySelector('#containerHome');



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
  labelCategoria.setAttribute = ('for', 'filtro-categoria');
  const selectCategoria = document.createElement('select');
  selectCategoria.id = 'filtro-categoria';
  selectCategoria.name = 'select';
  const categorias = ['Seleccionar', 'Acción', 'Aventura', 'Rol (RPG)', 'Estrategia'];
  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.textContent = categoria;
    selectCategoria.appendChild(option);
  });
  selectCategoria.addEventListener('change', (event) => {
    filterData.category = event.target.value;

  });

  filtros.appendChild(labelCategoria);
  filtros.appendChild(selectCategoria);

  // Crear y añadir el filtro de año
  const labelAño = document.createElement('label');
  labelAño.textContent = 'Año:';
  labelAño.setAttribute = ('for', 'filtro-año');
  const selectAño = document.createElement('select');
  selectAño.id = 'filtro-año';
  selectCategoria.name = 'select';
  const años = ['Seleccionar', '2010', '2011', '2012', '2013', '2015', '2016', '2017', '2018', '2019', '2020'];
  años.forEach(año => {
    const option = document.createElement('option');
    option.textContent = año;
    selectAño.appendChild(option);
  });
  selectAño.addEventListener('change', (event) => {
    filterData.yearOfCreation = event.target.value;
  });
  

  filtros.appendChild(labelAño);
  filtros.appendChild(selectAño);

  // Crear y añadir el filtro de ranking
  const labelRanking = document.createElement('label');
  labelRanking.textContent = 'Ranking:';
  labelAño.setAttribute = ('for', 'filtro-ranking');
  const selectRanking = document.createElement('select');
  selectRanking.id = 'filtro-ranking';
  selectCategoria.name = 'select';
  const rankings = ['Seleccionar', '5.0', '4.5', '4.0', '3.5'];
  rankings.forEach(ranking => {
    const option = document.createElement('option');
    option.textContent = ranking;
    selectRanking.appendChild(option);
  });
  selectRanking.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const filteredDataRanking = filterData(data, 'facts.ranking', selectedValue);
    const filteredItemsRanking = renderItems(filteredDataRanking);
  
    containerBody.innerHTML = '';
    containerBody.appendChild(filteredItemsRanking);
  });

  filtros.appendChild(labelRanking);
  filtros.appendChild(selectRanking);

  // Crear y añadir el filtro de orden alfabético
  const labelOrden = document.createElement('label');
  labelOrden.textContent = 'Orden alfabético:';
  const selectOrden = document.createElement('select');
  selectOrden.id = 'ordenar';
  selectCategoria.name = 'select';
  const ordenes = ['Seleccionar', 'Ascendente', 'Descendente'];
  ordenes.forEach(orden => {
    const option = document.createElement('option');
    option.textContent = orden;
    selectOrden.appendChild(option);
  });
  selectOrden.addEventListener('change', (event) => {
    ordenarABC.orden = event.target.value;
  });

  filtros.appendChild(labelOrden);
  filtros.appendChild(selectOrden);

  // Crear y añadir el botón de limpiar filtros
  const buttonLimpiar = document.createElement('button');
  buttonLimpiar.classList.add('limpiar-filtros');
  buttonLimpiar.innerHTML = '<b>Limpiar</b>';
  buttonLimpiar.addEventListener("click", limpiarFiltros);

  filtros.appendChild(buttonLimpiar);
  sidebar.appendChild(filtros); 

  const rankingPorAño = document.createElement('div');
  const rankingPromedio2016 = calcularRankingPromedio(data, "2016");
  rankingPorAño.id = 'rankingPorAño';
  rankingPorAño.innerHTML = `
      <p>Ranking Promedio</p>
      <p><b>2016</b></p>
      <h2 id="rankingPromedio2016">${rankingPromedio2016.toFixed(1)}</h2>      
  `;
  sidebar.appendChild(rankingPorAño);

  const mejorCategoria = document.createElement('div');
  const mejorRanking = generoMejorRankeado(data);
  mejorCategoria.id = 'mejorCategoria';
  mejorCategoria.innerHTML = `
      <p>Mejor Rankeado</p>
      <p><b>Categoria</b></p>
      <h2 id="mejorRanking">${mejorRanking}</h2>      
  `;

  sidebar.appendChild(mejorCategoria);
  container.appendChild(sidebar);

  return sidebar;
}

function limpiarFiltros() {
  const selectElements = document.querySelectorAll('select');
  selectElements.forEach(select => {
    select.selectedIndex = 0;
  });
   
  containerBody.innerHTML = '';
  const selectElementsContainer = createSelectElements();
  const dataItems = renderItems(data);
  containerBody.appendChild(selectElementsContainer);
  containerBody.appendChild(dataItems);
}


/*
const appliedFilters = {
  category: 'seleccionar',
  yearOfCreation: 'seleccionar',
  ranking: 'seleccionar',
  orden: 'seleccionar',
};
const applyFilters = () => {
  let filteredData = data;

  if (appliedFilters.category !== 'seleccionar') {
    filteredData = filterData(filteredData, 'facts.category', appliedFilters.category);
  }


  if (appliedFilters.yearOfCreation !== 'seleccionar') {
    filteredData = filterData(filteredData, 'facts.yearOfCreation', appliedFilters.yearOfCreation);
  }

  if (appliedFilters.ranking !== 'seleccionar') {
    filteredData = filterData(filteredData, 'facts.ranking', appliedFilters.ranking);
  }

  if (appliedFilters.orden !== 'seleccionar') {
    filteredData = ordenarABC(filteredData, appliedFilters.orden);
  }
  containerBody.innerHTML ='';
  const selectElementsContainer = createSelectElements();
  const dataItems = renderItems(data);
  containerBody.appendChild(selectElementsContainer);
  containerBody.appendChild(dataItems);

  if (filteredData.length === 0) {
    const noResultsMessage = document.createElement('h3');
    noResultsMessage.textContent = 'No se encontraron coincidencias';
    containerBody.appendChild(noResultsMessage);

  } else {
    const filteredItems = renderItems(filteredData);
    containerBody.appendChild(filteredItems);
  }
};

applyFilters();*/