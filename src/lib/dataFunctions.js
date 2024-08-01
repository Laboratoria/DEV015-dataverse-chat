/* eslint-disable indent */
/* eslint-disable no-unused-vars */

export const computeStats = (data) => {
    const sumaTotalDuracion = data.reduce((acumulador, pelicula) => acumulador + Number(pelicula.facts.tiempoDuracion.split(" ")[0]), 0);
    
    return sumaTotalDuracion/data.length;
  };
  
export const computeStatsNota = (data) => {
    const sumaTotalNota = data.reduce((acumulador, pelicula) => acumulador + Number(pelicula.facts.clasificPublico.split("/")[0]), 0);
     const promedioNota= sumaTotalNota/data.length;

    return promedioNota.toFixed(1);
  };


export const filterData = (data, filterBy, value) => {
  const resultFilter = data.filter(
    (data) => data.facts[filterBy] >= Number(value) && data.facts[filterBy] <= Number(value) + 9
  );
  return resultFilter; 
};

export const sortData = (data,sortBy, sortOrder) => {
  const nombresOrdenados = data.sort((a, b) => {
    if (sortOrder === 'Asc') {
      return a[sortBy].localeCompare(b[sortBy]);
    } else {
      return b[sortBy].localeCompare(a[sortBy]);
    }
  });
    return nombresOrdenados;
};