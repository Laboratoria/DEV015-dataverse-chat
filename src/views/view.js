export const renderItems = (data) => {
    const ul = document.createElement("ul");
    ul.classList.add("ulPelis");
  
    data.forEach((pelicula) => {
      const li = document.createElement("li");
      li.classList.add("tarjeta");
      li.setAttribute("itemtype", "peliculasDisney");
      li.setAttribute("itemscope", "true");
      li.setAttribute("data-id", pelicula.id)
      li.innerHTML = `
      <div itemscope itemtype="peliculasDisneyPixar">
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
      ul.appendChild(li);
    });
    return ul;
  };