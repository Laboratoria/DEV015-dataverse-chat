import data from '../../data/dataset.js'; //importa data
import { renderItems } from '../../view.js'; //importa view
import { sortData } from '../../lib/dataFunctions.js';

// aqui van las tarjetas
const Home = () => {
  const controls = `<div>
      <h1>MUJERES QUE INSPIRAN</h1>
      <div class="filter-controls">
        <!-- las opciones de este selectbox de categorias se agregan por javascript -->
        <label for="mainField">Categoría</label>
        <select id="mainField" name="mainField" data-testid="select-filter"></select>
        <label for="orderDir">Ordenar</label>
        <select id="orderDir" name="orderDir" data-testid="select-sort">
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <button type="button" id="clean">Limpiar</button>
      </div>
    </div>`;

  const view = document.createElement('div');
    view.innerHTML = controls+'<div id="cards_root">'+renderItems(sortData(data,'name','asc'))+'</div>';
    return view;
  };
  
export default Home;