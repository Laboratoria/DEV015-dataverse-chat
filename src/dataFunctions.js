export const filterData = (data, filterBy, value) => {
  // console.log('Filtrando datos por:', filterBy, value);

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

