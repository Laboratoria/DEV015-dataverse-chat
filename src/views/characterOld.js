import data from '../Data/dataset.js';
import Card from '../components/card.js';
import { filterData, sortData, computeStats } from '../lib/dataFunction.js';

export default function Character() {
    const viewEl = document.createElement('div');
    const listEl = document.createElement('ul');
    listEl.classList.add('card-container');

    data.forEach(item => {
        const cardEl = Card(item);
        listEl.appendChild(cardEl);
    });

    viewEl.appendChild(listEl);
    return viewEl;
}
const characters = data;
// Ejemplo: Filtrar personajes por tipo de guardian
const filteredCharacters = filterData(characters, 'tipo', 'Guardian');
console.log('Personajes filtrados:', filteredCharacters);

// Ejemplo: Ordenar personajes por poder de forma ascendente
const sortedCharacters = sortData(filteredCharacters, 'poder', 'asc');
console.log('Personajes ordenados:', sortedCharacters);

// Ejemplo: Calcular estadísticas basadas en los personajes filtrados
const totalCharacters = characters.length;
const stats = computeStats(filteredCharacters, totalCharacters);
console.log('Estadísticas:', stats);