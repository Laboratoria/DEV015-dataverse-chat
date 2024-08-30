import dataset from "../data/dataset.js";

const personajes = (characters = dataset) => { 
  const personajesContainer = document.createElement('div'); // Cambié 'main' por 'div'
  personajesContainer.classList.add('character-list'); // Añadir la clase para el contenedor
  
  characters.forEach((personaje) => {
    const personajeEl = document.createElement('div');
    personajeEl.classList.add('personajes'); // Añadir la clase para cada tarjeta

    personajeEl.innerHTML = `
      <h3>${personaje.name}</h3>
      <img src="${personaje.imageUrl}" alt="${personaje.name}" />
      <p>Edad: ${personaje.facts.edad}</p>
      <p>Situación Sentimental: ${personaje.facts.sitSentimental}</p>
      <p>${personaje.shortDescription}</p>
    `;
    personajesContainer.appendChild(personajeEl);
  });

  return personajesContainer; 
};

export default personajes;

