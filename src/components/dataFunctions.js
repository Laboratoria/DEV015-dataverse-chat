import { characters } from './data/dataset.js';

export function filterCharactersByFamily(family) {
  return characters.filter(character => character.facts.familia.toLowerCase() === family.toLowerCase());
  //crea un nuevo array que contiene solo los personajes que cumplen con una 
  //condición específica
}

export function sortCharactersByName(data, sortBy, sortOrder) {
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
}


export function filterAndSortCharacters(family, order) {
  // Función combinada para filtrar y ordenar personajes
  let filteredCharacters = family ? filterCharactersByFamily(family) : characters;
  //expresión ternaria, forma abreviada de un if-else en una sola línea
  if (order) {
    //verifica si order tiene un valor que se considera verdadero
    filteredCharacters = sortCharactersByName(filteredCharacters, 'name', order);
  //si hay un valor en order, se ordenan los personajes filtrados 
  }
  return filteredCharacters;
  //devuelve el arreglo final, después de aplicar cualquier filtro y ordenación
}


export function getCharacters() {
  // Devuelve el estado actual del arreglo de personajes
  return characters;
}

export function calcularEstadisticas(data) {
  
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
}
