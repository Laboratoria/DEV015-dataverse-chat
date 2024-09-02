import { renderItems } from '../components/componentsCards.js';
import { createSelectElements } from '../components/componentsSelect.js';
import { createHeader, createHeaderResponsive } from '../components/componentsHeader.js';
import { createFooter } from '../components/componentsFooter.js';
import { filterData, ordenarABC } from '../lib/dataFunctions.js';
import data from '../data/dataset.js';

export const Home = () => {
  const container = document.createElement('div');
  container.className = 'containerHome';

  const containerHeader = document.createElement('div');
  containerHeader.className = 'containerHeaderHome';

  const HeaderResponsive = document.createElement('div');
  HeaderResponsive.className = 'containerHeaderResponsive';

  const containerBody = document.createElement('div');
  containerBody.className = 'containerBodyHome';
  containerBody.id = 'containerBodyHome';

  const containerFooter = document.createElement('div');
  containerFooter.className = 'containerFooterHome';

  const header = createHeader();
  

  
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'cardsContainer';


  const applyFilters = () => {
    const category = document.getElementById('filtro-categoria').value;
    const year = document.getElementById('filtro-año').value;
    const ranking = document.getElementById('filtro-ranking').value;
    const order = document.getElementById('ordenar').value;

    let filteredData = data;

    if (category !== 'Seleccionar') {
      filteredData = filterData(filteredData, 'facts.category', category);
    }

    if (year !== 'Seleccionar') {
      filteredData = filterData(filteredData, 'facts.yearOfCreation', year);
    }

    if (ranking !== 'Seleccionar') {
      filteredData = filterData(filteredData, 'facts.ranking', ranking);
    }

    if (order !== 'Seleccionar') {
      filteredData = ordenarABC(filteredData, order);
    }

 
    cardsContainer.innerHTML = ''; 
    const filteredItems = renderItems(filteredData);
    cardsContainer.appendChild(filteredItems);
  };

 
  const selectElements = createSelectElements(applyFilters);
  const datadetarjetas = renderItems(data);

 
  containerBody.appendChild(selectElements);
  cardsContainer.appendChild(datadetarjetas);
  containerBody.appendChild(cardsContainer);

  const headerResponsive = createHeaderResponsive(applyFilters);

  const footer = createFooter();

  containerHeader.appendChild(header);
  containerHeader.appendChild(headerResponsive);
  containerFooter.appendChild(footer);

  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  container.appendChild(containerFooter);

  return container;
};
