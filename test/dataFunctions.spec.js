//considerar tener un archivo de prueba por cada archivo javascript que desees probar.

import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';
import { data } from './dataFake.js'; //la ruta: /src/data/dataset.js NO pq sería todo

describe('filterData', () => {
  it('se filtra data por streamingPlatform', () => {
    const filteredData = filterData(data, 'streamingPlatform', 'Netflix');
    expect(filteredData.length).toBe(2); // Esperamos 2 resultados
    expect(filteredData[0].id).toBe('stranger-things'); // Verificamos el ID del primer elemento
    expect(filteredData[1].id).toBe('black-mirror'); // Verificamos el ID del segundo elemento
  });

  it('se devuelve un array vacío si no hay data que coincida', () => {
    const filteredData = filterData(data, 'streamingPlatform', 'Star+');
    expect(filteredData.length).toBe(0); // Esperamos 0 resultados
  });
  
});
describe('sortData', () => {
  it('should sort data by name in ascending order', () => {
    const sortedData = sortData(data, 'name', 'asc');
    expect(sortedData.map(item => item.name)).toEqual(['Black Mirror', 'Stranger Things', 'The Expanse', 'Westworld']);
  });

  it('should sort data by name in descending order', () => {
    const sortedData = sortData(data, 'name', 'desc');
    expect(sortedData.map(item => item.name)).toEqual(['Westworld', 'The Expanse', 'Stranger Things', 'Black Mirror']);
  });

  it('should sort data by yearOfRelease in ascending order', () => {
    const sortedData = sortData(data, 'yearOfRelease', 'asc');
    expect(sortedData.map(item => item.facts.yearOfRelease)).toEqual(['2011', '2015', '2016', '2016']);
  });
  it('should sort data by yearOfRelease in descending order', () => {
    const sortedData = sortData(data, 'yearOfRelease', 'desc');
    expect(sortedData.map(item => item.facts.yearOfRelease)).toEqual(['2016', '2016', '2015', '2011']);
  });
  it('should sort data by averageRating in ascending order', () => {
    const sortedData = sortData(data, 'averageRating', 'asc');
    expect(sortedData.map(item => item.name)).toEqual(['The Expanse', 'Westworld', 'Stranger Things', 'Black Mirror']);
  });

  it('should sort data by averageRating in descending order', () => {
    const sortedData = sortData(data, 'averageRating', 'desc');
    expect(sortedData.map(item => item.name)).toEqual(['Black Mirror', 'Stranger Things', 'Westworld', 'The Expanse']);
  });

});

describe('computeStats', () => {
  it('calcula correctamente los años promedio de transmisión', () => {
    const stats = computeStats(data);
    expect(stats.avgYears).toBeCloseTo(9.25, 2); // Se espera un promedio de 9 años de transmisión
  })
});