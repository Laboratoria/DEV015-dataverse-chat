export const renderItems = (data) => {


  const ul = document.createElement("ul");
  data.forEach(item => {
    const li = document.createElement('li');
    // li.setAttribute("itemtype",)

    const nameElement = document.createElement('h3');
    nameElement.textContent = item.name;

    const shortDescriptionElement = document.createElement('p');
    shortDescriptionElement.textContent = item.shortDescription;

    const imageUrlElement = document.createElement('img');
    imageUrlElement.setAttribute("src", item.imageUrl);

    /*const descriptionElement = document.createElement('p');
    descriptionElement.textContent = item.description;*/

    const categoryElement = document.createElement('p');
    categoryElement.innerHTML = `<strong class="bold-text">Categoría:</strong> ${item.facts.category}`;

    const yearOfCreationElement = document.createElement('p');
    yearOfCreationElement.innerHTML = `<strong class="bold-text">Año de Creación:</strong> ${item.facts.yearOfCreation}`;

    const rankingElement = document.createElement('p');
    rankingElement.innerHTML = `<strong class="bold-text">Calificación:</strong> ${item.facts.ranking}`;

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



