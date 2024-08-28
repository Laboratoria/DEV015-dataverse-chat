import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';
import data from '../src/data/dataset.js';
// Test de filterData
describe('filterData', () => {
  it('debería filtrar los datos por mainField correctamente. Hay 6 matemáticas.', () => {
    const filteredData = filterData(data, 'mainField', 'Matemáticas');
    expect(filteredData).toBeInstanceOf(Array);
    expect(filteredData.length).toBe(6);
  });

  it('debería filtrar los datos por mainField correctamente. Hay 4 quimicas.', () => {
    const filteredData = filterData(data, 'mainField', 'Química');
    expect(filteredData).toBeInstanceOf(Array);
    expect(filteredData.length).toBe(4);
  });

});
// Test de sortData
describe('sortData', () => {
  it('debería ordenar los datos por nombre de manera ascendente', () => {
    const sortedData = sortData(data, 'asc');
    expect(sortedData[0].name < sortedData[1].name).toBe(true);
  });
  it('debería ordenar los datos por nombre de manera descendente', () => {
    const sortedData = sortData(data, 'desc');
    expect(sortedData[0].name > sortedData[1].name).toBe(true);
  });
});
// Test de computeStats
describe('computeStats', () => {
  it('debería computar estadísticas básicas de los datos', () => {
    const stats = computeStats(data);
    expect(stats.count).toBe(data.length);
  });
});