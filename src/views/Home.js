import dataFunctions from '../lib/dataFunctions.js';
import petsData from '../data/dataset.js';
import { Nav } from '../components/Nav.js';
import Banner from '../components/Banner.js';
import Cards from '../components/Cards.js';
import Footer from '../components/Footer.js';
import { navigateTo } from '../router.js';

const { filterDataByValue, filterDataByAge, filterDataByType, showPets, orderPetsBy, countAdoptedPets } = dataFunctions;

export const home = () => {
  const homeView = document.createElement("div");
  homeView.className = 'body';

  // Añadir la barra de navegación
  homeView.appendChild(Nav());


  //Crear el main
  const main = document.createElement("main");
  main.innerHTML = Banner() + Cards();
  // Añadir el main al body
  homeView.appendChild(main);

  // Añadir el footer
  homeView.appendChild(Footer());

  window.onload= function(){
    initializePage();
  }

  // Configurar eventos cuando el DOM está completamente cargado
  document.addEventListener('DOMContentLoaded', () => {
    initializePage();
  });

  // También manejar la navegación de historia
  window.addEventListener('popstate', () => {
    initializePage();
  });

  return homeView;

};

function initializePage() {

  // Configurar botones y eventos
  configureMenu();
  configureFiltersAndButtons();
}

function configureMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const btnCloseIcon = document.querySelector('.btn-close i');
  const dropDownMenu = document.querySelector('.sidebar');

  if (menuBtn && dropDownMenu) {
    menuBtn.onclick = () => dropDownMenu.classList.toggle('active');
  }

  if (btnCloseIcon && dropDownMenu) {
    btnCloseIcon.onclick = () => dropDownMenu.classList.remove('active');
  }

  // Manejo del clic en el botón para desplazar hacia la sección de cards
  document.getElementById('conocelos-btn').addEventListener('click', () => {
    const seccionCards = document.getElementById('tarjetas-section');
    if (seccionCards) {
      seccionCards.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('El elemento con id "seccion-cards" no se encuentra en el DOM.');
    }
  });
  
}

function configureFiltersAndButtons() {
  // Estado de los filtros
  const filtros = {
    tipo: null,
    edad: null,
    genero: null,
    tamaño: null
  };

  //Aplicar filtros seleccionados
  function aplicarFiltros(datos) {
    let resultados = datos;

    // Filtro por tipo
    if (filtros.tipo) {
      resultados = filterDataByType(resultados, 'type', filtros.tipo.toLowerCase());
    }

    // Filtro por edad
    if (filtros.edad) {
      const ageRanges = {
        'Cachorro': [0, 12],
        'Adulto': [13, 119],
        'Mayor': [120, 240]
      };

      const [minAge, maxAge] = ageRanges[filtros.edad];
      resultados = filterDataByAge(resultados, 'age', minAge, maxAge);
    }

    // Filtro por género
    if (filtros.genero) {
      resultados = filterDataByValue(resultados, 'gender', filtros.genero);
    }

    // Filtro por tamaño
    if (filtros.tamaño) {
      resultados = filterDataByValue(resultados, 'size', filtros.tamaño);
    }

    return resultados;
  }

  // Aplicar filtros y actualizar la vista
  function actualizarVista() {
    const petCardsContainer = document.getElementById('pets-container');
    if (petCardsContainer) {
      petCardsContainer.innerHTML = ''; // Limpia solo el contenedor de tarjetas
      const resultadosFiltrados = aplicarFiltros(petsData);
    
      // Verifica el valor devuelto por renderItems
      const itemsNode = renderItems(resultadosFiltrados);


      if (itemsNode && itemsNode instanceof Node) {
        petCardsContainer.appendChild(itemsNode);
      } else {
        console.error('renderItems no devolvió un nodo válido');
      }
    } else {
      console.error('No se encontró el contenedor de tarjetas.');
    }
  }

  //Configuración de filtros

  // Filtro Tipo //

  const selectTipo = document.querySelector('#tipo');
  selectTipo.addEventListener('change', (event) => {
    filtros.tipo = event.target.value;
    actualizarVista();
  });

  // Filtro Edad //

  const selectAge = document.getElementById('edad');
  selectAge.addEventListener("change", () => {
    filtros.edad = selectAge.value;
    actualizarVista();
  })

  // Filtro Género //
  const selectGenero = document.querySelector('#genero');
  selectGenero.addEventListener('change', (event) => {
    filtros.genero = event.target.value;
    actualizarVista();
  });

  //Filtro Tamaño //
  const selectTamaño = document.querySelector('#tamaño');
  selectTamaño.addEventListener('change', (event) => {
    filtros.tamaño = event.target.value;
    actualizarVista();
  });


  // Botón Limpiar //

  const botonLimpiar = document.querySelector('#btn-limpiar');
  
  botonLimpiar.addEventListener('click', () => {
  // Restablecer el estado de los filtros
    filtros.tipo = null;
    filtros.edad = null;
    filtros.genero = null;
    filtros.tamaño = null;

    //Restablecer los selects
    selectTipo.value = "Tipo";
    selectGenero.value = "Genero";
    selectAge.value = "Edad";
    selectTamaño.value = "Tamaño";

    //Limpiar los radio buttons
    botonOrdenarAsc.checked = false;
    botonOrdenarDesc.checked = false;

    const petCardsContainer = document.getElementById('pets-container');

    petCardsContainer.innerHTML = '';

    const mostrarTarjetas = showPets();
    const petsClean = renderItems(mostrarTarjetas);

    petCardsContainer.appendChild(petsClean);

  });


  const botonOrdenarAsc = document.querySelector('#asc');

  botonOrdenarAsc.addEventListener("click", function(){
    const petCardsContainer = document.getElementById('pets-container');

    petCardsContainer.innerHTML = '';
  
    const resultadosFiltrados = aplicarFiltros(petsData);
    const valorElegido = botonOrdenarAsc.value;
    const ordenarPetsData = orderPetsBy(resultadosFiltrados,'name',valorElegido);
    petCardsContainer.appendChild(renderItems(ordenarPetsData))

  })

  const botonOrdenarDesc = document.querySelector('#desc');
  botonOrdenarDesc.addEventListener("click", function(){
    const petCardsContainer = document.getElementById('pets-container');

    petCardsContainer.innerHTML = '';
    const resultadosFiltrados = aplicarFiltros(petsData);
    const valorElegido = botonOrdenarDesc.value;
    const ordenarPetsData = orderPetsBy(resultadosFiltrados, 'name', valorElegido);
    petCardsContainer.appendChild(renderItems(ordenarPetsData))
  })

  // Botón Estadísticas //

  const btnStats = document.querySelector('#btn-estadísticas');
  const sectionStats = document.querySelector('.estadisticas-section');
  const btncloseStats = document.querySelector('.btn-close2 li i');
  const adoptedPets = document.querySelector('.adoptados');

  btnStats.addEventListener('click', () => {
    sectionStats.style.display = 'block';
    const adoptedResult = countAdoptedPets(petsData)
    adoptedPets.innerHTML = `Número de mascotas adoptadas: ${adoptedResult}`;

  });

  btncloseStats.addEventListener('click', () => {
    sectionStats.style.display = 'none';
  });

  // Manejo de eventos para el botón de filtros
  const botonFiltros = document.querySelector('.boton-filtros');
  if (botonFiltros) {
    botonFiltros.addEventListener('click', () => {
      const filtros = document.querySelector('.mascotas-filtros');
      if (filtros) {
        filtros.classList.toggle('abierto');
      } else {
        console.error('El elemento con clase "mascotas-filtros" no se encuentra en el DOM.');
      }
    });
  } else {
    console.error('El elemento con clase "boton-filtros" no se encuentra en el DOM.');
  }

}

function renderItems(pets) {
  const ul = document.createElement("ul");
  ul.className = "ul-tarjeta";

  pets.forEach((pet) => {
    const petItem = document.createElement("li");
    petItem.className = "tarjeta";
    petItem.setAttribute('itemscope', '');
    petItem.setAttribute('itemtype', 'http://schema.org/Pet');

    // Convertir la edad a meses
    const { years, months } = pet.facts.age;
    const totalMonths = (years * 12) + months;

    let ageDisplay;
    if (totalMonths < 12) {
      ageDisplay = `${months} mes(es)`;
    } else {
      ageDisplay = `${years} año(s)`;
    }

    // Usar la función para obtener el HTML
    petItem.innerHTML = `
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
    </li>
    <div class="content-tarjeta-button">
        <button class="tarjeta-button" data-id="${pet.id}">
          <i class="fa-sharp-duotone fa-solid fa-comment fa-beat-fade fa-3x""></i>
        </button>
    </div>
    `;    
    // Añadir el evento al botón
    const buttonElement = petItem.querySelector('.tarjeta-button');
    buttonElement.addEventListener('click', (event) => {
    // Encontrar el contenedor de la tarjeta
      const petId = event.currentTarget.getAttribute('data-id');
      navigateTo('/individualChat', { id: petId });
    });

    ul.appendChild(petItem);
  });

  return ul;
}




export default home;