import {tarjetaPelicula} from "../Components/tarjetaPelicula.js";
import data from "../Data/dataset.js"
import { createHeader } from "../Components/header.js"; 

export const films = () => {
  const div = document.createElement("div");
    const header = createHeader();
    div.appendChild(header);
    
    const selectMovie = data.find((movie) => movie.id === URLSearchParams.id);
    if (selectMovie) {
      div.appendChild(pelicula(selectMovie));
    } else {
      div.inneHTML =  div.innerHTML = `<p>Película no encontrada</p>`;
    }
  
    return div;
  };

  export default films;