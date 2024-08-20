import { navigateTo } from "../router.js";

export const card = (item) => {
  const liElement = document.createElement('li');
    liElement.classList.add("cardli");
    liElement.setAttribute("itemscope","");
    liElement.setAttribute("itemtype", "");
    liElement.setAttribute("data-id", item.id);

    liElement.innerHTML = `
    <div>
      <div class="tituloPeli"><h3 itemprop="name"> ${item.name} </h3> </div>
      <div class="contenedorContenido">
      <div class="contenedorImagen"><img class="imagenPeli" src="${item.imageUrl}" alt="${item.id}"></div>
      <div class="contenedorTextos">
      <div class="descripcion"> <span itemprop="descripcion">${item.shortDescription}</span> </div>
      <div class="hechos"> 
        <p itemprop="añoEstreno"><b>Año:</b> ${item.facts.estreno}</p>
        <p itemprop="genero"><b>Género:</b> ${item.facts.generoPelicula}</p>
        <p itemprop="clasificacionPublico"><b>Puntuación en IMDb:</b> ${item.facts.clasificPublico}</p>
        <p itemprop="duracion"><b>Duración:</b> ${item.facts.tiempoDuracion}</p>
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

