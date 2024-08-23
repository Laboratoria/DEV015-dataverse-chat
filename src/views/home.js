import data from "../data/dataset.js";
import { card } from "../Components/Card.js";

export const Home = () => {
  const div = document.createElement("div");
  const el = document.createElement("h1");

  el.innerHTML = "Dreamland";
  div.appendChild(el);

  
  const showCard = (data) => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("ulPelis");

    data.forEach((item) => {
      ulElement.appendChild(card(item));
    });
    return ulElement;
  };


  div.appendChild(showCard(data)); 
  return div;
};

export default Home;
