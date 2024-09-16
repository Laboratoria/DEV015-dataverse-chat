import dataFunctions from "../lib/dataFunctions.js";
import { navigateTo } from "../router.js";

export const Cards = () => {
  // Función para calcular la edad en formato adecuado
  const getAgeDisplay = (years, months) => {
    const totalMonths = (years * 12) + months;
    return totalMonths < 12 ? `${months} mes(es)` : `${years} año(s)`;
  };

  // Función para generar el HTML de las mascotas
  const createPetHTML = (pet) => {
    const { years, months } = pet.facts.age;
    const ageDisplay = getAgeDisplay(years, months);

    return `
      <li class="tarjeta" itemscope itemtype="http://schema.org/Pet">
        <div itemprop="tarjeta-img">
          <img class="tarjeta-img" src="${pet.imageUrl}" alt="${pet.id}">
        </div>
        <div itemprop="name">${pet.name}</div>
        <div itemprop="description">${pet.shortDescription}</div>
        <div itemprop="age"><strong>Edad:</strong> ${ageDisplay}</div>
        <div itemprop="gender"><strong>Género:</strong> ${pet.facts.gender}</div>
        <div itemprop="breed"><strong>Raza:</strong> ${pet.facts.breed}</div>
        <div itemprop="size"><strong>Tamaño:</strong> ${pet.facts.size}</div>
        <div itemprop="temperament"><strong>Comportamiento:</strong> ${pet.facts.temperament}</div>
        <div class="content-tarjeta-button">
        <button class="tarjeta-button">
          <i class="fa-sharp-duotone fa-solid fa-comment fa-beat-fade fa-3x""></i>
        </button>
        </div>
      </li>
    `;
  };

  // Función para manipular el DOM e insertar las mascotas
  const renderPets = () => {
    // Obtener la lista de mascotas
    const petsList = dataFunctions.showPets();

    // Generar HTML de las mascotas
    const petsHTML = petsList.map(createPetHTML).join('');

    // Manipular el DOM
    const petsContainer = document.getElementById('pets-container');
    if (petsContainer) {
      const ul = document.createElement("ul");
      ul.className = "ul-tarjeta";
      ul.innerHTML = petsHTML;
      petsContainer.appendChild(ul);

      // Añadir eventos a los botones de cada tarjeta
      document.querySelectorAll('.tarjeta-button').forEach(button => {
        button.addEventListener('click', (event) => {
          const petId = event.target.closest('.tarjeta').querySelector('img').alt; // Suponiendo que el alt es el ID
          console.log('CARDS.JS: Button Cards:' + petId);
          if (petId) {
            navigateTo('/individualChat', { id: petId });
            //console.error('CARDS.JS: Se encontró.');
          } else {
            console.error('CARDS.JS: No se encontró el ID de la mascota.');
          }
        });
      });
    }
  };

  // Retornar el HTML estático del componente de tarjetas
  const staticHTML = `
    <!-- Desktop Tarjetas -->
    <section class="mascotas-container" id="tarjetas-section">        
      <section class="mascotas-tarjetas">
        <h2 class="nuestras-mascotas">
          <span>Our pets</span>
          <p>All our pets come with a gift kit that includes: bath, bed, cookies, Wuf collar, ID tag, clothing, spa session, identification microchip, flea prevention, and much more!</p>
          <p class="numeroAdoptados"></p>
        </h2>
        <div class="mascotas-barra">
          <ul class="opciones-mascota">
            <li class="boton-filtros"><i class="fa-solid fa-bars" id="bars-2"></i>Filtros</li>
            <label id="orden"> Ordenar por:
              <input id="asc" type="radio" name="sort-order" value="asc" data-testid="select-sort">
              <i class="fa-solid fa-arrow-down-a-z" style="color: #ff7a00;"></i>
              <input id="desc" type="radio" name="sort-order" value="desc" data-testid="select-sort">
              <i class="fa-solid fa-arrow-up-a-z" style="color: #ff7a00;"></i>
            </label>
            <button id="btn-estadísticas">Estadísticas</button>
          </ul>
        </div>
        <div class="estadisticas-section">
          <div class="btn-close2">
            <li><i class="fa-solid fa-xmark"></i></li>
            <p class="adoptados"></p>
            <div class="graphics"></div>
          </div>
        </div>
        <div class="mascotas-filtros">
          <label for="tipo"></label>
          <select id="tipo" name="elegir" data-testid="select-filter">
            <option value="Tipo" disabled selected hidden>Tipo</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>
          <label for="edad"></label>
          <select id="edad" name="elegir">
            <option value="Edad" disabled selected hidden>Edad</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Adulto">Adulto</option>
            <option value="Mayor">Mayor</option>
          </select>
          <label for="genero"></label>
          <select id="genero" name="elegir">
            <option value="Genero" disabled selected hidden>Género</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
          <label for="tamaño"></label>
          <select id="tamaño" name="elegir">
            <option value="Tamaño" disabled selected hidden>Tamaño</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
          <div>
            <button id="btn-limpiar" data-testid="button-clear">Limpiar</button>
          </div>
        </div>
        <div id="pets-container">
          <!-- Aquí se insertarán las mascotas dinámicamente -->
        </div>
      </section> 
    </section>
  `;

  // Usar requestAnimationFrame para asegurar que el DOM esté cargado
  requestAnimationFrame(() => {
    renderPets();
  });


  return staticHTML;
};


export default Cards;