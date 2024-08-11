import data from '../../data/dataset.js'; //importa data
import { renderItems } from '../../view.js'; //importa view
import { filterData,sortData } from '../../lib/dataFunctions.js';
import { renderCategories } from '../../categories.js'; //importa categories
import { navigateTo } from '../../router.js';

// aqui van las tarjetas
const Home = (params) => {
  const categorySelect = renderCategories(params);

  const controls = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent='MUJERES QUE INSPIRAN';
  controls.appendChild(title);

  const filterControls = document.createElement('div');
  filterControls.classList.add('filter-controls');

  const catLabel = document.createElement('label');
  catLabel.setAttribute('for','mainField');
  catLabel.textContent='Categoría';
  filterControls.appendChild(catLabel);

  filterControls.appendChild(categorySelect);

  const sortLabel = document.createElement('label');
  sortLabel.setAttribute('for','orderDir');
  sortLabel.textContent='Ordenar';
  filterControls.appendChild(sortLabel);

  const orderSelect = document.createElement('select');
  orderSelect.setAttribute('id','orderDir');
  orderSelect.setAttribute('name','orderDir');
  orderSelect.setAttribute('data-testid','select-sort');
  
  const availableOptions = [{value:'asc',text:'Ascendente'},{value:'desc',text:'Descendente'}];

  for(const a of availableOptions){
    const option = document.createElement("option");
    option.value = a.value;
    option.text = a.text;
    if( params.order===a.value ){
      option.setAttribute('selected',true);
    }

    orderSelect.add(option);
  }

  orderSelect.addEventListener('change',function(event){
    const selectBoxCategory = document.querySelector('select#mainField');
    navigateTo('/',{category:selectBoxCategory.value,order:event.target.value});
  });

  filterControls.appendChild(orderSelect);

  const cleanButton = document.createElement('button');
  cleanButton.setAttribute('type','button');
  cleanButton.setAttribute('id','clean');
  cleanButton.textContent = 'Limpiar';

  cleanButton.addEventListener('click',function(){
    const selectBoxCategory = document.querySelector('select#mainField');
    const selectBoxOrder    = document.querySelector('select#orderDir');

    selectBoxCategory.value = ''; //actualiza los cambios
    selectBoxOrder.value = 'asc';

    const change_event = new Event('change');// nuevo evento que se ejecuta
  
    selectBoxCategory.dispatchEvent(change_event);// gatilla los cambios forzando al nuevo evento
    selectBoxOrder.dispatchEvent(change_event);
  });

  filterControls.appendChild(cleanButton);
  controls.appendChild(filterControls);

    let items;
   
    if( params.category !== '' ){
      const filtered = filterData(data,'mainField',params.category);
      items = renderItems(sortData(filtered,params.order));
    }
    else{
      items = renderItems(sortData(data,params.order));
    }

    const view = document.createElement('div');
    view.appendChild(controls);

    const cardsRoot = document.createElement('div');
    cardsRoot.setAttribute('id','cards_root');

    for(const card of items){
      cardsRoot.appendChild(card);
    }

    view.appendChild(cardsRoot);

    return view;
  };
  
export default Home;
