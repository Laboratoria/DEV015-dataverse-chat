import {
  filterData,
  sortData,
  computeStats,
} from "../src/lib/dataFunctions.js";
import { data as fakeData } from "../test/data.js";

describe("test unitarios orden", () => {
  it("test unitarios orden asc", () => {
    const dataResultado = sortData(fakeData, "name", "Asc");
    expect(dataResultado[0].name).toBe("Atlantis: El Imperio Perdido");
  });

  it("test unitarios orden desc", () => {
    const dataResultado = sortData(fakeData, "name", "Desc");
    expect(dataResultado[0].name).toBe("Wall-e");
  });
});

describe("test unitario filtro", () => {
  it("test unitario filtro época 1990", () => {
    const dataFiltro90 = filterData(fakeData, "estreno", "1990");
    expect(dataFiltro90.length).toBe(2);
  });

  it("test unitario filtro época 2000", () => {
    const dataFiltro00 = filterData(fakeData, "estreno", "2000");
    expect(dataFiltro00.length).toBe(5);
  });

  it("test unitario filtro época 2010", () => {
    const dataFiltro10 = filterData(fakeData, "estreno", "2010");
    expect(dataFiltro10.length).toBe(3);
  });

  it("test unitario filtro época 2020", () => {
    const dataFiltro20 = filterData(fakeData, "estreno", "2020");
    expect(dataFiltro20.length).toBe(1);
  });
});

describe("test unitario promedio duración", () => {
  it("test unitario promedio", () => {
    const resultado = computeStats(fakeData);
    expect(resultado).toBe(94.27272727272727);
  });
});
