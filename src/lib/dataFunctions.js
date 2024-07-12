// SORT-----------------------------------------------------------------------------------
export const sortData = (data, sortBy, sortOrder) => {
  const copyData = data.map((item) => item);
  const dataOrder = copyData.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
  return sortOrder === "asc" ? dataOrder : dataOrder.reverse();
};

// FILTRO---------------------------------------------------------------------------------
export const filterData = (data, filterBy, value) =>{
  const resultFilterData = data.filter((item) => {
    const factsFilter = String(item.facts[filterBy]).split('');
    return factsFilter[0].includes(value);
  });
  return resultFilterData;
}

//STATS PORCENTAJES------------------------------------------------------------------
export const computeStats = (data, dataTotal) => {
  const percentage = (data.length / dataTotal.length) * 100;
  return percentage.toFixed(2);
};

//PROMEDIO DE EDAD---------------------------------------------------------------------

export const averageStats = (data) => {
  const average = data.reduce((acumulador, item) => {
    return acumulador + item.facts["age"];
  }, 0);
  return (average / data.length).toFixed();
};