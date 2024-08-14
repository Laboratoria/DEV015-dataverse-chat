// Crear funcion filterData
export const filterData = (data, filterBy, value) => {
  return data.filter(item => 
    item.extraInfo[filterBy] && 
    item.extraInfo[filterBy].toLowerCase() === value.toLowerCase()
  );
};


// Crear funcion sortData
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  if (sortOrder === "desc") {
    data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  return data;
}

// Crear funcion computeStats
export function computeStats(dataFiltrada, totalPersonajes) {

  // Se declara objeto para usar en la funcion reduce
  const elementeReduce = {
    totalTipoGuardian: 0,
    tipoGuardian: []
  };

  // Obtengo total tipo de guardian (totalTipoGuardian) y listado de guardianes (tipoGuardian)
  const { totalTipoGuardian, tipoGuardian } = dataFiltrada.reduce((acumulador, personajes) => {
    // Contador
    acumulador.totalTipoGuardian += 1;

    // Almacena el tipo de personaje
    acumulador.tipoGuardian.push(personajes);

    return acumulador;
  }, elementeReduce);

  // Calcula porcentaje
  const porcentajeTipoGuardian = (totalTipoGuardian / totalPersonajes) * 100;

  // Almacena los nombres
  const nombreTipoPersonaje = tipoGuardian.map(guardian => guardian.name);


  return {
    totalPersonajes,
    totalTipoGuardian,
    porcentajeTipoGuardian,
    tipoGuardian: nombreTipoPersonaje

  };
}