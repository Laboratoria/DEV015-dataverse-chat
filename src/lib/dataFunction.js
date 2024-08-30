const characters = [
  { name: 'Daphne Bridgerton', familia: 'bridgerton', description: 'A main character.', facts: { sitSentimental: 'casada' } },
  { name: 'Penelope Featherington', familia: 'featherington', description: 'A supporting character.', facts: { sitSentimental: 'soltera' } },
  // Más personajes...
];

export function filterCharactersByFamily(familia) {
  // Filtra personajes por familia
  return characters.filter(character => character.familia === familia);
}

export function sortCharactersByName(characters, sortBy, order) {
  const sortedCharacters = [...characters];
  return sortedCharacters.sort((a, b) => {
    if (order === 'asc') {
      return a[sortBy].localeCompare(b[sortBy]); // Orden ascendente
    } else if (order === 'des') {
      return b[sortBy].localeCompare(a[sortBy]); // Orden descendente
    }
    return 0; // Por si acaso `order` no es 'asc' ni 'des'
  });
}

export function filterAndSortCharacters(familia, order) {
  // Filtra y luego ordena los personajes
  let filteredCharacters = familia ? filterCharactersByFamily(familia) : characters;
  if (order) {
    filteredCharacters = sortCharactersByName(filteredCharacters, 'name', order);
  }
  return filteredCharacters;
}

export function getCharacters() {
  // Devuelve todos los personajes
  return characters;
}
export function calcularEstadisticas(data) {
  return data.reduce((estadisticas, character) => {
    const sitSentimental = character.facts.sitSentimental ? character.facts.sitSentimental.toLowerCase() : '';

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
  });
}
