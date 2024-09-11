import data from "../data/dataset.js";
import { cardMovie } from "../components/tarjetaPelicula.js";
import { createHeader } from "../components/header.js";

export const Films = (props) => {
  const div = document.createElement("div");
  const header = createHeader();
  div.appendChild(header);

  const selectMovie = data.find((movie) => movie.id === props.id);
  if (selectMovie) {
    div.appendChild(cardMovie(selectMovie));
  } else {
    div.inneHTML = div.innerHTML = `<p>Película no encontrada</p>`;
  }

  return div;
};
