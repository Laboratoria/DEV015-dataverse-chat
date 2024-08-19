export const filterData = (data, filterBy, value) => {
  return data.filter(character => 
    character.facts[filterBy].toLowerCase() === value.toLowerCase()
  );
};
  
  
export const sortData = (data, sortBy, sortOrder) => {
  // exportamos la función para ordenar personajes por nombre
  //data:array de objeto(personajes),sortBy:campo del objeto,sortOrder: asc-des
  const sortedCharacters = [...data];
  //crea un nuevo array(copia)que contiene todos los elementos del array 
  return sortedCharacters.sort((a, b) => {
    //compara cada par de elementos y luego retorna el array ordenado. 
    if (sortOrder === 'asc') {
    //si es excatamente igual se ordena de forma ascendente
      return a[sortBy].localeCompare(b[sortBy]);
    //método de las cadenas de texto en JS que compara dos cadenas de texto
    } else if (sortOrder === 'des') {
    //ademas si ...
      return b[sortBy].localeCompare(a[sortBy]);
      //comparacion a la inversa (desendente)

    }
  });
};
  
export const computeStats = (data) => {
  return data.reduce((estadisticas, character) => {
    // Función para calcular estadísticas usando reduce
    const sitSentimental = character.facts.sitSentimental.toLowerCase();
    //accede a la propiedad sitSentimental de un objeto character 
    //y almacena el resultado en la constante sitSentimental
    
    if (sitSentimental.includes("casad")) {
      estadisticas.casados++;
    } else if (sitSentimental.includes("solter")) {
      estadisticas.solteros++;
    } else if (sitSentimental.includes("viud")) {
      estadisticas.viudos++;
    } else if (sitSentimental.includes("amante")) {
      estadisticas.amantes++;
    }
    return estadisticas;
  }, {
    casados: 0,
    solteros: 0,
    viudos: 0,
    amantes: 0
    //contador con el que inicializan los contadores
  });
};