import { filterCharactersByFamily, sortCharactersByName } from '../dataFunctions.js';

export function CharacterList({ familyFilter, sortFilter }) {
  const viewEl = document.createElement('div');
  const filteredCharacters = filterCharactersByFamily(familyFilter);
  const sortedCharacters = sortCharactersByName(filteredCharacters, 'name', sortFilter);

  const ul = document.createElement('ul');
  sortedCharacters.forEach(character => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.imageUrl}" alt="${character.name}" />
      <p>Edad: ${character.facts.edad}</p>
      <p>Situación Sentimental: ${character.facts.sitSentimental}</p>
      <p>${character.shortDescription}</p>
    `;
    ul.appendChild(li);
  });

  viewEl.appendChild(ul);
  return viewEl;
}
