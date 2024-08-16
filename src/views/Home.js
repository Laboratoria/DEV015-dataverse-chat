import { renderItems } from '../components/componentsCards.js';
import { createSelectElements } from '../components/componentsSelect.js';
import { createHeader } from '../components/componentsHeader.js';
import { createFooter } from '../components/componentsFooter.js';
import { filterData, ordenarABC } from '../lib/dataFunctions.js';
import data from '../data/dataset.js';

export const Home = () => {
  const container = document.createElement('div');
  container.className = 'containerHome';

  const containerHeader = document.createElement('div');
  containerHeader.className = 'containerHeaderHome';

  const containerBody = document.createElement('div');
  containerBody.className = 'containerBodyHome';
  containerBody.id = 'containerBodyHome';

  const containerFooter = document.createElement('div');
  containerFooter.className = 'containerFooterHome';

  const header = createHeader();

  // Crear contenedor para las tarjetas
  const tarjetasContainer = document.createElement('div');
  tarjetasContainer.id = 'tarjetasContainer';

  // Callback para aplicar los filtros
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

    // Actualizar solo las tarjetas
    tarjetasContainer.innerHTML = ''; // Limpiar las tarjetas anteriores
    const filteredItems = renderItems(filteredData);
    tarjetasContainer.appendChild(filteredItems);
  };

  // Crear elementos de selección de filtros con el callback
  const selectElements = createSelectElements(applyFilters);
  const datadetarjetas = renderItems(data);

  // Añadir selectElements y tarjetas al containerBody
  containerBody.appendChild(selectElements);
  tarjetasContainer.appendChild(datadetarjetas);
  containerBody.appendChild(tarjetasContainer);

  const footer = createFooter();

  containerHeader.appendChild(header);
  containerFooter.appendChild(footer);

  container.appendChild(containerHeader);
  container.appendChild(containerBody);
  container.appendChild(containerFooter);

  return container;
};
