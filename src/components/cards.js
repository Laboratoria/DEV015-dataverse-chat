import { navigateTo } from "../router.js";

export const renderItems = (data) => {

  const ul = document.createElement("ul");

  function crearElemento(data) {
    const li = document.createElement("li");
    li.setAttribute("itemtype", "Spiderverse");
    li.setAttribute("itemscope", "");
    li.setAttribute("data-id", data.id);
    li.addEventListener("click", () =>{
      const cardsId = data.id
      navigateTo("/chat", cardsId)
      return cardsId
    })
    li.classList.add("item-lista");
    ul.appendChild(li);

    //IMAGEN--------------------------------------------------------------------
    const personajeImagen = document.createElement("div");
    personajeImagen.style.backgroundImage = `url(${data.imageUrl})`;
    personajeImagen.classList.add("image");
    personajeImagen.setAttribute("alt", data.name);
    li.appendChild(personajeImagen);

    //TEXTO-----------------------------------------------------------------------------
    const dl = document.createElement("dl");
    li.appendChild(dl);

    //NAME------------------------------------------------------------------------------------
    const dtNombre = document.createElement("dt");
    dl.appendChild(dtNombre);
    dtNombre.setAttribute("itemprop", "name");
    dtNombre.classList.add("name");
    dtNombre.innerHTML = data.name;

    //DESCRIPCION - CORTA -------------------------------------------------------------------------
    const dtDescripcion = document.createElement("dt");
    dl.appendChild(dtDescripcion);
    dtDescripcion.setAttribute("itemprop", "shortDescription");
    dtDescripcion.classList.add("descripcion");
    dtDescripcion.innerHTML = data.shortDescription;

    //DIV para FACTS-----------------------------------------------------------------------------
    const facts = document.createElement("div");
    facts.classList.add("facts");
    dl.appendChild(facts);

    //FACTS - GENERO---------------------------------------------------------------------------------
    const dtGender = document.createElement("dt");
    facts.appendChild(dtGender);
    dtGender.setAttribute("itemprop", "gender");
    dtGender.innerHTML =
      '<span class="label">Genero: </span><span class="value">' +
      data.facts.gender +
      "</span>";

    //FACTS - ESPECIE-------------------------------------------------------------------------------------
    const dtSpecies = document.createElement("dt");
    dtSpecies.setAttribute("itemprop", "species");
    facts.appendChild(dtSpecies);
    dtSpecies.innerHTML =
      '<span class="label">Especie: </span><span class="value">' +
      data.facts.species +
      "</span>";

    //FACTS - EDAD----------------------------------------------------------------------------------------------
    const dtAge = document.createElement("dt");
    facts.appendChild(dtAge);
    dtAge.setAttribute("itemprop", "age");
    dtAge.innerHTML =
      '<span class="label">Edad: </span><span class="value">' +
      data.facts.age +
      "</span>";

    //FACTS - CIUDAD----------------------------------------------------------------------------------------------
    const dtCity = document.createElement("dt");
    facts.appendChild(dtCity);
    dtCity.setAttribute("itemprop", "city");
    dtCity.innerHTML =
      '<span class="label"> Ciudad: </span><span class="value">' +
      data.facts.city +
      "</span>";
  }
  //CREA ELEMENTO POR CADA OBJETO DE LA DATA-----------------------------------------------------------------
  data.forEach(crearElemento);



  return ul;
};
