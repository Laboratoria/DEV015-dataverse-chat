export const cardMovie = (item) => {
    const divElement = document.createElement('div');
    divElement.classList.add("infoMovie");

    divElement.innerHTML = `
    <div>
    <h2> ${item.name} </h2>
    <div class="contenedorImagen">
        <img src="${item.imageUrl}" alt="${item.id}">
      </div>
      <div class="contenedorTextos">
        <span>${item.shortDescription}</span> 
         
        <span><b>Año de estreno:</b> ${item.facts.estreno}</span> 
         <span><b>Género:</b> ${item.facts.generoPelicula}</span> 
         <span><b>Clasificación en IMDb:</b> ${item.facts.clasificPublico}</span> 
         <span><b>Duración:</b> ${item.facts.tiempoDuracion}</span> 
         <span> <b>Resumen:</b> ${item.description}</span>
        <span> <b>¿Sabías qué?: </b> ${item.extraInfo.curiosidades}</span>
      </div>
    </div>
    `;

    return divElement;
}
