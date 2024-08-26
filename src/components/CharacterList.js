import { filterData, sortData } from "../lib/dataFunction.js";

export function CharacterList( familyFilter, sortFilter ) {
  const viewEl = document.createElement('div');
  const filteredCharacters = filterData(familyFilter);
  const sortedCharacters = sortData(filteredCharacters, 'name', sortFilter);

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

    return viewEl;

  });

  viewEl.appendChild(ul);
}
export default CharacterList;