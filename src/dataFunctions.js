export const filterData = (data, filterBy, value) => {
  console.log('Filtrando datos por:', filterBy, value);

  if (value === 'Seleccionar') {
    return data;
  }

  const filteredData = data.filter(item => {
    const keys = filterBy.split('.');
    let filteredItem = item;

    keys.forEach(key => {
      filteredItem = filteredItem[key];
    });

    return filteredItem === value;
  });

  return filteredData;
};

export const ordenarABC = (data, orden) => {
  return data.sort((a, b) => {
    if (orden === 'Ascendente') {
      return a.name.localeCompare(b.name);
    } else if (orden === 'Descendente') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  })
};

export const calcularRankingPromedio = (data, year) => {
  const juegosDelAño = data.filter(item => item.facts.yearOfCreation === year);
  const sumaDeRankings = juegosDelAño.reduce((sum, item) => sum + parseFloat(item.facts.ranking), 0);
  const rankingPromedio = sumaDeRankings / juegosDelAño.length;
  return rankingPromedio;
};

export function generoMejorRankeado(data) {
  const resultado = data.reduce((acc, juego) => {
    const categoria = juego.facts.category;
    const ranking = parseFloat(juego.facts.ranking);

    if (!acc[categoria]) {
      acc[categoria] = { totalRanking: 0, count: 0 };
    }

    acc[categoria].totalRanking += ranking;
    acc[categoria].count += 1;

    return acc;
  }, {});

  let mejorCategoria = null;
  let mejorPromedio = 0;

  for (const categoria in resultado) {
    const promedio = resultado[categoria].totalRanking / resultado[categoria].count;
    if (promedio > mejorPromedio) {
      mejorPromedio = promedio;
      mejorCategoria = categoria;
    }
  }

  return mejorCategoria;
}
/*
export function limpiarFiltros() {
  const selectElements = document.querySelectorAll('select');
  selectElements.forEach(select => {
    select.selectedIndex = 0;
  });
}



const selectCategoria = document.querySelector('#filtro-categoria');
const selectAño = document.querySelector('#filtro-año');
const selectRanking = document.querySelector('#filtro-ranking');
const selectOrdenar = document.querySelector('#ordenar');


let appliedFilters = {
  category: 'seleccionar',
  yearOfCreation: 'seleccionar',
  ranking: 'seleccionar',
  orden: 'seleccionar',
};

const applyFilters = () => {
  let filteredData = data;

  if (appliedFilters.category !== 'seleccionar') {
    filteredData = filterData(filteredData, 'facts.category', appliedFilters.category);
  }


  if (appliedFilters.yearOfCreation !== 'seleccionar') {
    filteredData = filterData(filteredData, 'facts.yearOfCreation', appliedFilters.yearOfCreation);
  }

  if (appliedFilters.ranking !== 'seleccionar') {
    filteredData = filterData(filteredData, 'facts.ranking', appliedFilters.ranking);
  }

  if (appliedFilters.orden !== 'seleccionar') {
    filteredData = ordenarABC(filteredData, appliedFilters.orden);
  }
  tarjetadedata.innerHTML = '';

  if (filteredData.length === 0) {
    const noResultsMessage = document.createElement('h3');
    noResultsMessage.textContent = 'No se encontraron coincidencias';
    tarjetadedata.appendChild(noResultsMessage);

  } else {
    const filteredItems = renderItems(filteredData);
    tarjetadedata.appendChild(filteredItems);
  }
};

applyFilters();

selectCategoria.addEventListener('change', (event) => {
  appliedFilters.category = event.target.value;
  applyFilters();
});

selectAño.addEventListener('change', (event) => {
  appliedFilters.yearOfCreation = event.target.value;
  applyFilters();
});

selectRanking.addEventListener('change', (event) => {
  appliedFilters.ranking = event.target.value;
  applyFilters();
});

selectOrdenar.addEventListener('change', (event) => {
  appliedFilters.orden = event.target.value;
  applyFilters();
});


const datadetarjetas = renderItems(data);
const tarjetadedata = document.querySelector('#containerBodyHome');

export function limpiarFiltros() {
  selectCategoria.selectedIndex = 'Seleccionar';
  selectAño.selectedIndex = 'Seleccionar';
  selectRanking.selectedIndex = 'Seleccionar';
  selectOrdenar.selectedIndex = 'Seleccionar';

  appliedFilters = {
    category: 'seleccionar',
    yearOfCreation: 'seleccionar',
    ranking: 'seleccionar',
    orden: 'seleccionar',
  };
  tarjetadedata.innerHTML = '';

  tarjetadedata.appendChild(datadetarjetas);
}
*/

