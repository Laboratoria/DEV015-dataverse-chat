// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


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

