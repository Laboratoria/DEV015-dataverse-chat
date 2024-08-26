import data from "../data/dataset.js";
import { cardMovie } from "../components/tarjetaPelicula.js";
import { createHeader } from "../components/header.js"; 

export const Films = (id) => {
  console.log(id);
  const div = document.createElement("div");
    const header = createHeader();
    div.appendChild(header);
    
    const selectMovie = data.find((movie) => movie.id === URLSearchParams.id);
    console.log(selectMovie);
    /*if (selectMovie) {
      div.appendChild(cardMovie(selectMovie));
    } else {
      div.inneHTML =  div.innerHTML = `<p>Película no encontrada</p>`;i
    }*/
  
    return div;
  };
