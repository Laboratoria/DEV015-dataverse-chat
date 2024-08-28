import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';

// Test de filterData
describe('filterData', () => {
  const sampleData = [
    {
      id: "ada-lovelace",
      name: "Ada Lovelace",
      facts: { mainField: ["Ciencias de la Computación"] }
    },
    {
      id: "emmy-noether",
      name: "Emmy Noether",
      facts: { mainField: ["Matemáticas"] }
    }
  ];

  it('debería filtrar correctamente por el campo "Matemáticas"', () => {
    const filtered = filterData(sampleData, 'Matemáticas');
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe("Emmy Noether");
  });

  it('debería devolver todos los datos si no se especifica un valor', () => {
    const filtered = filterData(sampleData);
    expect(filtered.length).toBe(2);
  });
  describe('sortData', () => {
    const sampleData = [
      { id: "ada-lovelace", name: "Ada Lovelace" },
      { id: "emmy-noether", name: "Emmy Noether" },
    ];

    it('debería ordenar los datos en orden ascendente por defecto', () => {
      const sorted = sortData([...sampleData]);
      expect(sorted[0].name).toBe("Ada Lovelace");
      expect(sorted[1].name).toBe("Emmy Noether");
    });

    it('debería ordenar los datos en orden descendente cuando se especifica', () => {
      const sorted = sortData([...sampleData], 'desc');
      expect(sorted[0].name).toBe("Emmy Noether");
      expect(sorted[1].name).toBe("Ada Lovelace");
    });
  });
});


describe('computeStats', () => {
  const sampleData = [
    {
      id: "ada-lovelace",
      name: "Ada Lovelace",
      facts: { mainField: ["Ciencias de la Computación"] }
    },
    {
      id: "emmy-noether",
      name: "Emmy Noether",
      facts: { mainField: ["Matemáticas"] }
    },
    {
      id: "hypatia-de-alejandria",
      name: "Hypatia de Alejandría",
      facts: { mainField: ["Matemáticas", "Filosofía"] }
    }
  ];

  it('debería calcular correctamente las estadísticas de los campos', () => {
    const stats = computeStats(sampleData);
    expect(stats['Ciencias de la Computación']).toBe('33%');
    expect(stats['Matemáticas']).toBe('67%');
    expect(stats['Filosofía']).toBe('33%');
  });
});