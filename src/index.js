import { Home } from './views/home';
import { ApiKey } from './views/ApiKey';
import { ChatIndividual } from './views/chatIndividual';
import { Error } from './views/error';
import { setRootEl, setRoutes, onURLChange } from './router.js';
import { CharacterList } from './components/CharacterList.js';
import { Statistics } from './components/Statistics.js';

const routes = {
  '/': Home,
  '/apikey': ApiKey,
  '/chat': ChatIndividual,
  '/error': Error
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById('root'));
  onURLChange(window.location);
});

window.addEventListener('popstate', () => {
  onURLChange(window.location);
});

// Function to handle filtering and sorting in SPA
function handleFiltersAndSorting() {
  const familyFilter = document.querySelector('#family-filter').value;
  const sortFilter = document.querySelector('#alfabetico').value;

  const characterList = CharacterList({ familyFilter, sortFilter });
  document.getElementById('root').appendChild(characterList);
}

document.querySelector('#family-filter').addEventListener('change', handleFiltersAndSorting);
document.querySelector('#alfabetico').addEventListener('change', handleFiltersAndSorting);

document.querySelector('#calcularEstadisticas').addEventListener('click', () => {
  const characters = getCharacters();
  const stats = Statistics({ characters });
  document.getElementById('resultado-estadisticas').innerHTML = '';
  document.getElementById('resultado-estadisticas').appendChild(stats);
});


/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
