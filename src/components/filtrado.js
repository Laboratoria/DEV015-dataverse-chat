const personajesList = [
  { name: 'Daphne Bridgerton', family: 'bridgerton', description: 'A main character.' },
  { name: 'Penelope Featherington', family: 'featherington', description: 'A supporting character.' },
  // Más personajes...
];

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

  // Añadir el event listener al formulario de filtro
  const selectFilter = filtradoEl.querySelector('#family-filter');
  selectFilter.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    handleFilterChange(selectedValue);
  });

  return filtradoEl;
};

// Función para manejar el cambio de filtro
const handleFilterChange = (selectedValue) => {
  const filteredList = personajesList.filter(personaje => 
    selectedValue === '' || personaje.family === selectedValue
  );

  updatePersonajesView(filteredList);
};

// Función para actualizar la vista con los personajes filtrados
const updatePersonajesView = (filteredList) => {
  const personajesContainer = document.getElementById('personajes-container');
  personajesContainer.innerHTML = '';

  filteredList.forEach(personaje => {
    const personajeEl = document.createElement('div');
    personajeEl.innerHTML = `
      <h3>${personaje.name}</h3>
      <p>${personaje.description}</p>
    `;
    personajesContainer.appendChild(personajeEl);
  });
};

export default filtrado;
