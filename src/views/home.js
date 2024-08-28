import  data  from "../data/dataset.js";
import { card } from "../Components/Card.js";
import { createHeader } from "../components/header.js"; 
import { createFooter } from "../Components/footer.js";
//import {filterData, sortData} from "../Components/filtroyorden.js";

export const Home = () => {
  const div = document.createElement("div");

  const header = createHeader();
  div.appendChild(header);

  const subtitle = document.createElement ("h2")
  subtitle.innerHTML = "¡Bienvenidos fans de Disney y Pixar! Explora nuestro mágico contenido y descubre las novedades de este fantástico mundo donde puedes chatear con tus películas favoritas";
  div.appendChild(subtitle);

  /*const sortSelector = document.createElement("select");
  sortSelector.id = "Nombre";*/

  const showCard = (data) => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("ulPelis");

    data.forEach((item) => {
      ulElement.appendChild(card(item));
    });
    return ulElement;
  };

  div.appendChild(showCard(data)); 
  

  const footer = createFooter();
  div.appendChild(footer);
  return div;
};


