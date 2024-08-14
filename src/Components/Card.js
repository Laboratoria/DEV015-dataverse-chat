import { navigateTo } from "../router.js";

export const Card = (itemn) => {
    liElement.classList.add("cardli");
    liElement.setAttribute("itemscope","");
    liElement.setAttribute("itemtype", "");
    liElement.setAttribute("data-id", item.id);

    li.innerHTML = `
    <div>
      <div class="tituloPeli"><h3 itemprop="name"> ${pelicula.name} </h3> </div>
      <div class="contenedorContenido">
      <div class="contenedorImagen"><img class="imagenPeli" src="${pelicula.imageUrl}" alt="${pelicula.id}"></div>
      <div class="contenedorTextos">
      <div class="descripcion"> <span itemprop="descripcion">${pelicula.shortDescription}</span> </div>
      <div class="hechos"> 
        <p itemprop="añoEstreno"><b>Año:</b> ${pelicula.facts.estreno}</p>
        <p itemprop="genero"><b>Género:</b> ${pelicula.facts.generoPelicula}</p>
        <p itemprop="clasificacionPublico"><b>Puntuación en IMDb:</b> ${pelicula.facts.clasificPublico}</p>
        <p itemprop="duracion"><b>Duración:</b> ${pelicula.facts.tiempoDuracion}</p>
      </div>
      </div>
      </div>
    </div>
    `;
    
    liElement.addEventListener('click', () => {
        navigateTo('/chatIndividual', {id: item.id});
    });
    return liElement;
};

