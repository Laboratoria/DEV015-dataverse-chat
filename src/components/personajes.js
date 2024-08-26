import dataset from "../data/dataset.js"; // Asegúrate de importar tu archivo de datos correctamente

const personajes = () => {
  const personajesContainer = document.createElement('div'); // Usamos 'div' para contener los personajes

  dataset.forEach((personaje) => {
    const personajeEl = document.createElement('div');
    personajeEl.innerHTML = `
      <h3>${personaje.name}</h3>
      <img src="${personaje.imageUrl}" alt="${personaje.name}" />
      <p>Edad: ${personaje.facts.edad}</p>
      <p>Situación Sentimental: ${personaje.facts.sitSentimental}</p>
      <p>${personaje.shortDescription}</p>
    `;
    personajesContainer.appendChild(personajeEl); // Agregamos cada personaje al contenedor
  });

  return personajesContainer; // Devolvemos el contenedor completo con todos los personajes
};

export default personajes;
