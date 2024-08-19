// test/dataFunctions.spec.js
import data from '../src/data/dataset.js'; //importamos el dataset
import { filterData } from '../src/lib/dataFunction.js';
import { sortData } from '../src/lib/dataFunction.js';
import { computeStats } from '../src/lib/dataFunction.js';
import { filterAndSortCharacters } from '../src/lib/dataFunction.js';
import { getCharacters } from '../src/lib/dataFunction.js';

describe('filterData', () => {
  it('returns characters from the Bridgerton family', () => {
    const result = filterData(data, 'familia', 'Bridgerton'); // Filtra la familia "Bridgerton": Utiliza filterData para obtener todos los personajes que pertenecen a la familia "Bridgerton".
    const expectedCharacters = data.filter(character => character.facts.familia === 'Bridgerton'); // Esto filtra el dataset original para obtener el array de personajes que coinciden con la familia "Bridgerton" y compara con el resultado de filterData
    expect(result).toEqual(expectedCharacters); // Compara ambos resultados
  });

  it('returns an empty array if no characters match the family', () => { //Filtra la familia "Featherington": Similar a la primera prueba, pero busca personajes de la familia "Featherington".
    const result = filterData(data, 'familia', 'Featherington'); 
    const expectedCharacters = data.filter(character => character.facts.familia === 'Featherington'); //Si ningún personaje coincide con la familia, se espera que la función retorne un array vacío.

    expect(result).toEqual(expectedCharacters);
  });
});

const getExpectedSortedData = (data, order) => {
  return [...data].sort((a, b) => {
    if (order === 'asc') return a.name.localeCompare(b.name);
    if (order === 'des') return b.name.localeCompare(a.name);
  });
};

describe('sortData', () => {
  test('should sort data by name in ascending order', () => {
    expect(sortData(data, 'name', 'asc')).toEqual(getExpectedSortedData(data, 'asc'));
  });

  test('should sort data by name in descending order', () => {
    expect(sortData(data, 'name', 'des')).toEqual(getExpectedSortedData(data, 'des'));
  });
});

describe('computeStats', () => {
  test('should compute correct statistics for sentiment status', () => {
    const result = computeStats(data);
    const expected = {
      casados: 13,   
      solteros: 5,  
      viudos: 4,    
      amantes: 2,    
    };
    expect(result).toEqual(expected);
  });
});

describe('filterAndSortCharacters', () => {
  test('should filter characters by family and sort them by name in ascending order', () => {
    const result = filterAndSortCharacters('Bridgerton', 'asc', data);
    const expected = data
      .filter(char => char.facts.familia === 'Bridgerton')
      .sort((a, b) => a.name.localeCompare(b.name));
  
    expect(result).toEqual(expected);
  });
});
describe('getCharacters', () => {
  test('should return the entire dataset', () => {
    const result = getCharacters();
    expect(result).toEqual(data); // Compara si el resultado es igual al dataset original
  });
});