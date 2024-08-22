import data from '../Data/dataset.js';
import Card from '../components/card.js';
import filterComponent from '../components/filters.js';
import order from '../components/order.js';
import { filterData } from '../lib/dataFunction.js';

export default function Character() {
    const viewEl = document.createElement('div');

    // Crear y agregar el componente de filtro
    const filterEl = filterComponent();
    filterEl.classList.add('filter-select');
    viewEl.appendChild(filterEl);
    
    const sortEl = order();
    sortEl.classList.add('select-order');
    viewEl.appendChild(sortEl);


    const listEl = document.createElement('ul');
    listEl.classList.add('card-container');
    viewEl.appendChild(listEl);

    const characters = data;

    // Función para cargar las cards filtradas
    function load(data) {
        listEl.innerHTML = ''; // Limpiar la lista actual
        data.forEach(item => {
            const cardEl = Card(item);
            listEl.appendChild(cardEl);
        });
    }

    // Carga todas las tarjetas inicialmente
    load(characters);

    // Agregar el evento después de que filterEl se haya agregado al DOM
    filterEl.addEventListener('change', function () {
        const dataFiltrada = filterData(characters, 'tipoGuardian', this.value);
        load(dataFiltrada);
    });



    const sortByEl = document.getElementById('sortBy');
    if (sortByEl) {
        sortByEl.addEventListener('change', function () {
            const sortOrder = this.value;
            const valorSeleccionadoFilterBy = document.getElementById('filterBy').value;
            const copiaData = [...characters];
        
            let dataFiltradaYOrdenada;

            if (valorSeleccionadoFilterBy === "") { // Asegúrate de que el valor sea "" para vacío
                dataFiltradaYOrdenada = sortData(copiaData, 'name', sortOrder);
            } else {
                const dataFiltrada = filterData(copiaData, 'tipoGuardian', valorSeleccionadoFilterBy);
                dataFiltradaYOrdenada = sortData(dataFiltrada, 'name', sortOrder);
            }

            load(dataFiltradaYOrdenada);
        });
    }

    return viewEl;
}