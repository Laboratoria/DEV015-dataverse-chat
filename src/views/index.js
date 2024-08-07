import Home from './home/Home.js';
import Detail from './Detail.js';
import Error from './Error.js';

// Importa otras vistas según sea necesario
import { setRootEl, setRoutes, onURLChange } from './router.js';

import data from '../data/dataset.js'; //importa data
import { renderStats, renderItems } from '../view.js'; //importa view
import { renderCategories } from '../categories.js'; //importa categories
import { filterData,sortData,computeStats } from '../lib/dataFunctions.js';

// Define las rutas y las vistas asociadas
const routes = {
  '/': Home,
  '/detail': Detail,
  '/error': Error,
  // Agrega más rutas y vistas aquí
};

// Configura las rutas
setRoutes(routes);

// Asigna el elemento raíz donde se renderizarán las vistas
window.addEventListener("DOMContentLoaded", () => {
  // Supongamos que tu elemento raíz en el HTML es un div con id 'root'
  const rootElement = document.getElementById('root');
  setRootEl(rootElement);

  // Maneja la carga de la página inicial
  onURLChange(window.location);

  // Escucha los cambios de URL (navegación)
  window.onpopstate = () => onURLChange(window.location);

  // imprimimos las tarjetas actualizando innerHTML del div #cards_root
  const cards_root = document.querySelector('#cards_root');

  const facts = document.querySelector("#curious_fact");
  facts.textContent = renderStats(computeStats(data));

  const selectBoxCategory = document.querySelector('select[name="mainField"]');
  const selectBoxOrder = document.querySelector('select[name="orderDir"]');
  const cleanButton = document.querySelector('#clean');

  // crear opciones de select de categorias dinamicamente. opciones unicas!!
  renderCategories(selectBoxCategory);

  // agregar event listener de on Change para el select box de categorias
  selectBoxCategory.addEventListener('change',function(event){
    const filtered = filterData(data,'mainField',event.target.value);
    cards_root.innerHTML = renderItems(sortData(filtered,'name',selectBoxOrder.value));
  });

  // agregar event listener de on Change para el select box de ordenar
  selectBoxOrder.addEventListener('change',function(event){
    const category = selectBoxCategory.value;
    const filtered = filterData(data,'mainField',category);
    cards_root.innerHTML = renderItems(sortData(filtered,'name',event.target.value));
  });

  cleanButton.addEventListener('click',function(){
    selectBoxCategory.value = ''; //actualiza los cambios
    selectBoxOrder.value = 'asc';

    const change_event = new Event('change');// nuevo evento que se ejecuta
  
    selectBoxCategory.dispatchEvent(change_event);// gatilla los cambios forzando al nuevo evento
    selectBoxOrder.dispatchEvent(change_event);
  });

});
