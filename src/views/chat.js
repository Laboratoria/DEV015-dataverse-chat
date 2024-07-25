import header from "../components/header.js";
import data from "../data/dataset.js";

function chat(props) {
  const contentHome = document.createElement("div");
  
  const character = data.find((item) => item.id === props);
  contentHome.appendChild(header());
  
  document.title=`Dataverse Chat - ${character.name}`;

  const showData = document.createElement("div");
  showData.classList.add = "card-character";

  showData.innerHTML = `
    <h2 class='card-character-title'>${character.name}</h2>
    <div class='card-character-content'>
      <p class='card-character-shortd card-p'>${character.shortDescription}</p>
      <p class='card-character-d card-p'>${character.description}</p>
      <div class='card-content-facts'>
        <ul class='card-character-ul'>
          <li class='card-character-facts'>Especie:<span> ${character.facts.species}</span></li>
          <li class='card-character-facts'>Genero:<span> ${character.facts.gender}</span></li>
          <li class='card-character-facts'>Edad:<span> ${character.facts.age}</span></li>
          <li class='card-character-facts'>Ciudad:<span> ${character.facts.city}</span></li>
        </ul>
        <div class='card-image'>
          <img class='card-img' src='${character.imageUrl}'>
        </div>
        
        </div>
        </div>
        `;
  contentHome.appendChild(showData);
  return contentHome;
  // <div class='card-image'
  //     alt='imagen de ${character.name}'
  //     style='background-image: url(${character.imageUrl})'
  // ></div>
}

export default chat;
