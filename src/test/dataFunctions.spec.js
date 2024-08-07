import { expect } from '@playwright/test';
import { filterData, sortData, computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
import { data as fakeDataOrder } from './dataOrdenada.js';

//console.log(fakeData);

describe('pruebas para funcion "filterData"', () => {

  it('retorna data filtrada por option "guardian sistema solar interno"', () => {
    const optionValueSeleccionado = "guardian sistema solar interno";
    const resultadoFiltrado = filterData(fakeData, 'tipoGuardian', optionValueSeleccionado);
    expect(resultadoFiltrado.length).toBe(5);
    expect(resultadoFiltrado[0].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
    expect(resultadoFiltrado[1].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
    expect(resultadoFiltrado[2].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
    expect(resultadoFiltrado[3].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
    expect(resultadoFiltrado[4].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
  });
});

describe('pruebas para funcion "sortData"', () => {

  it('retorna data ordenada de forma ascendente `sortData`', () => {
    const sortOrder = "asc";
    const copiaData = [...fakeData];
    const dataOrdenada = sortData(copiaData, 'name', sortOrder);
    expect(dataOrdenada[0].name).toBe('Ami Mizuno');
    expect(dataOrdenada[23].name).toBe('Yaten Kou');
  });
  it('retorna posicion 0 data ordenada de forma ascendente `sortData`', () => {
    const sortOrder = "asc";
    const copiaData = [...fakeDataOrder];
    const dataOrdenada = sortData(copiaData, 'name', sortOrder);
    expect(dataOrdenada[0].name).toBe('C Usagi Tsukino');    
    expect(dataOrdenada[1].name).toBe('C Usagi Tsukino');
  });
  it('retorna data ordenada de forma descendente `sortData`', () => {
    const sortOrder = "desc";
    const copiaData = [...fakeData];
    const dataOrdenada = sortData(copiaData, 'name', sortOrder);
    expect(dataOrdenada[0].name).toBe('Yaten Kou');    
    expect(dataOrdenada[23].name).toBe('Ami Mizuno');
  });
  it('retorna posicion 0 data ordenada de forma descendente `sortData`', () => {
    const sortOrder = "desc";
    const copiaData = [...fakeDataOrder];
    const dataOrdenada = sortData(copiaData, 'name', sortOrder);
    expect(dataOrdenada[0].name).toBe('C Usagi Tsukino');    
    expect(dataOrdenada[1].name).toBe('C Usagi Tsukino');
  });
});

describe('pruebas para funcion "computeStats"', () => {
  it('Obtención de estadísticas cuando hay datos válidos', () => {
    const totalPersonajes = 24
    const optionValueSeleccionado = "guardian sistema solar interno";
    const resultadoFiltrado = filterData(fakeData, 'tipoGuardian', optionValueSeleccionado);
    const resultado = computeStats(resultadoFiltrado, totalPersonajes);
    expect(resultado.totalPersonajes).toBe(totalPersonajes);
    expect(resultado.totalTipoGuardian).toBe(5);
    expect(resultado.porcentajeTipoGuardian).toBeCloseTo((5 / 24) * 100);
  });
});
