import { navigateTo } from "../router.js";
export const renderItems = (data) => {


  const ul = document.createElement("ul");
  ul.id = 'card';
  //ul.addEventListener('click', () => {
  //navigateTo('/chat-individual');
  //});
  data.forEach(item => {
    const li = document.createElement('li');
    li.setAttribute('data-id', item.id);    //asignar id para cada videojuego
    // li.setAttribute("itemtype",)

    const chatIcon = document.createElement('img');
    chatIcon.setAttribute("src", '../img/Chat Icon Blanco.png');
    chatIcon.className = 'chatIcon';

    chatIcon.id = 'chatIcon';
    
    chatIcon.addEventListener('click', (event) => {
      event.stopPropagation();
      const gameId = li.getAttribute('data-id');
      console.log("Game ID on click", gameId);
      navigateTo("/chat-individual",{ data: gameId});
    });

    const nameElement = document.createElement('h3');
    nameElement.textContent = item.name;

    const shortDescriptionElement = document.createElement('p');
    shortDescriptionElement.textContent = item.shortDescription;

    const imageUrlElement = document.createElement('img');
    imageUrlElement.setAttribute("src", item.imageUrl);

    /*const descriptionElement = document.createElement('p');
    descriptionElement.textContent = item.description;*/

    const categoryElement = document.createElement('p');
    categoryElement.innerHTML = `<strong class="boldText">Categoría:</strong> ${item.facts.category}`;

    const yearOfCreationElement = document.createElement('p');
    yearOfCreationElement.innerHTML = `<strong class="boldText">Año de Creación:</strong> ${item.facts.yearOfCreation}`;

    const rankingElement = document.createElement('p');
    rankingElement.innerHTML = `<strong class="boldText">Calificación:</strong> ${item.facts.ranking}`;

    li.appendChild(chatIcon);
    li.appendChild(nameElement);
    li.appendChild(shortDescriptionElement);
    li.appendChild(imageUrlElement);
    //li.appendChild(descriptionElement);
    li.appendChild(categoryElement);
    li.appendChild(yearOfCreationElement);
    li.appendChild(rankingElement);


    ul.appendChild(li);
  });

  return ul;
};