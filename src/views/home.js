import renderHeader from "../components/Renderheader.js";
import personajes from "../components/personajes.js"; 
import dataset from "../data/dataset.js"; 
import renderFooter from "../components/renderFooter.js"; // Importa correctamente el footer
import { calcularEstadisticas, getCharacters } from "../lib/dataFunction.js"; // Asegúrate de importar esto

function home() {
  const divHome = document.createElement('div');

  const header = renderHeader();
  divHome.appendChild(header);

  const navOrdenFiltroBoton = document.createElement('nav');
  navOrdenFiltroBoton.classList.add('nav-container'); // Añadir clase al nav

  const filtroOrdenBotonContainer = document.createElement('div');
  filtroOrdenBotonContainer.classList.add('filtro-ordenado-boton-container'); // Añadir clase al contenedor

  filtroOrdenBotonContainer.appendChild(filtrado());
  filtroOrdenBotonContainer.appendChild(ordenado());
  filtroOrdenBotonContainer.appendChild(boton());

  navOrdenFiltroBoton.appendChild(filtroOrdenBotonContainer);
  divHome.appendChild(navOrdenFiltroBoton);

  const personajesContainer = personajes(dataset); 
  personajesContainer.id = 'personajes-container'; 
  divHome.appendChild(personajesContainer);

  // Agregar el footer
  const footer = renderFooter();
  divHome.appendChild(footer);

  return divHome;
}

const filtrado = () => {
  const filtradoEl = document.createElement('nav');
  filtradoEl.innerHTML = `
    <form id="filter-form">
      <label for="family-filter" id="famFilter">Filtrar por:</label>
      <select id="family-filter" data-testid="select-filter" name="familyFilter">
        <option value=""> </option>
        <option value="bridgerton">Bridgerton</option>
        <option value="featherington">Featherington</option>
        <option value="basset">Basset</option>
        <option value="danbury">Danbury</option>
        <option value="real">Realeza</option>
        <option value="No Tiene">No tiene</option>
        <option value="mondrich">Mondrich</option>
        <option value="crane">Crane</option>
        <option value="cowper">Cowper</option>
        <option value="granville">Granville</option>
      </select>
    </form>
  `;

  const selectFilter = filtradoEl.querySelector('#family-filter');
  selectFilter.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    const personajesContainer = document.getElementById('personajes-container');
    if (!personajesContainer) {
      return;
    }

    const filteredCharacters = dataset.filter(personaje => {
      const family = personaje.facts.familia ? personaje.facts.familia.toLowerCase() : ''; 
      return selectedValue === '' || family === selectedValue.toLowerCase();
    });

    personajesContainer.innerHTML = ''; 

    const personajesContent = personajes(filteredCharacters);
    personajesContainer.appendChild(personajesContent);
  });

  return filtradoEl;
};

const ordenado = () => {
  const ordenadoEl = document.createElement('nav');
  ordenadoEl.innerHTML = `
    <label for="alfabetico" id="alfabe">Ordenar por:</label>
    <select id="alfabetico" data-testid="select-sort" name="alfabetico">
      <option value=""> </option>
      <option value="asc">Ordenar A-Z</option>
      <option value="des">Ordenar Z-A</option>
    </select>   
  `;

  ordenadoEl.querySelector('#alfabetico').addEventListener('change', (event) => {
    const order = event.target.value;
    const family = document.querySelector('#family-filter').value;

    const filteredCharacters = dataset.filter(personaje => 
      family === '' || personaje.facts.familia.toLowerCase() === family.toLowerCase()
    );

    const sortedCharacters = filteredCharacters.sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else if (order === 'des') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    const personajesContainer = document.getElementById('personajes-container');
    personajesContainer.innerHTML = ''; 
    personajesContainer.appendChild(personajes(sortedCharacters));

    // Contenedor para mostrar las estadísticas
    const resultadoEstadisticas = document.getElementById('resultado-estadisticas');
    resultadoEstadisticas.id = 'resultado-estadisticas';
    resultadoEstadisticas.style.marginTop = '20px'; // Añade un margen superior
    document.body.appendChild(resultadoEstadisticas);

    // Calcular y mostrar las estadísticas al cargar la página
    const stats = calcularEstadisticas(getCharacters());
    resultadoEstadisticas.innerHTML = `
      <p>Casados: ${stats.casados}</p>
      <p>Solteros: ${stats.solteros}</p>
      <p>Viudos: ${stats.viudos}</p>
      <p>Amantes: ${stats.amantes}</p>
    `;
  });

  return ordenadoEl;
};

const boton = () => {
  const botonEl = document.createElement('div');
  botonEl.innerHTML = `
    <button type="button" data-testid="button-clear">Despejar</button>
  `;
  botonEl.querySelector('button').addEventListener('click', () => {
    const personajesContainer = document.getElementById('personajes-container');
    personajesContainer.innerHTML = ''; 
    personajesContainer.appendChild(personajes(dataset)); 

    document.querySelector('#filter-form').reset(); 
    document.querySelector('#alfabetico').value = ''; // Cambié `reset()` a `value = ''` para restablecer el select
  });

  return botonEl;
};

export default home;
