import data from "../data/dataset.js";
import { card } from "../Components/Card.js";
import { createHeader } from "../components/header.js";
import { createFooter } from "../Components/footer.js";
import { filtroyorden } from "../Components/filtroyorden.js";
import { api } from "../views/api.js";

export const Home = () => {
  const div = document.createElement("div");
  div.appendChild(createHeader());
  div.appendChild(api());

  const showCard = (data) => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("ulPelis");

    data.forEach((item) => {
      ulElement.appendChild(card(item));
    });
    return ulElement;
  };
  const element = showCard(data);

  div.appendChild(filtroyorden(element));

  div.appendChild(element);

  const footer = createFooter();
  div.appendChild(footer);
  return div;
};
