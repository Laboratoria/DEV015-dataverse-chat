import { generoMejorRankeado, calcularRankingPromedio } from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";
import data from '../data/dataset.js';




export function createSelectElements(mainContainer) {
  // console.log (mainContainer)  

  const containerBody = mainContainer.querySelector('#containesBodyHome')

export function createSelectElements(applyFiltersCallback) {

  const container = document.createElement('div');
  container.classList.add('contenedor');

  const sidebar = document.createElement('div');
  sidebar.classList.add('barra-lateral');
  sidebar.id = 'barra-lateral';

  const apiBox = document.createElement('div');
  apiBox.id = 'apiBox';
  apiBox.innerHTML = `<h3>API KEY</h3>`;
  apiBox.addEventListener('click', () => {
    navigateTo('/api');
  });

  sidebar.appendChild(apiBox);

  const filtros = document.createElement('div');
  filtros.classList.add('filtros');

  const createSelect = (labelText, id, options) => {
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', id);

    const select = document.createElement('select');
    select.id = id;
    select.name = 'select';

    options.forEach(optionValue => {
      const option = document.createElement('option');
      option.textContent = optionValue;
      option.value = optionValue;
      select.appendChild(option);
    });

    select.addEventListener('change', () => {
      applyFiltersCallback();
    });

    filtros.appendChild(label);
    filtros.appendChild(select);
  };

  createSelect('Categoría:', 'filtro-categoria', ['Seleccionar', 'Acción', 'Aventura', 'Rol (RPG)', 'Estrategia']);
  createSelect('Año:', 'filtro-año', ['Seleccionar', '2010', '2011', '2012', '2013', '2015', '2016', '2017', '2018', '2019', '2020']);
  createSelect('Ranking:', 'filtro-ranking', ['Seleccionar', '5.0', '4.5', '4.0', '3.5']);
  createSelect('Orden alfabético:', 'ordenar', ['Seleccionar', 'Ascendente', 'Descendente']);

  const buttonLimpiar = document.createElement('button');
  buttonLimpiar.classList.add('limpiar-filtros');
  buttonLimpiar.innerHTML = '<b>Limpiar</b>';
  buttonLimpiar.addEventListener('click', () => {
    filtros.querySelectorAll('select').forEach(select => select.value = 'Seleccionar');
    applyFiltersCallback();
  });

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
