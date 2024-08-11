import data from './data/dataset.js'; //importa data
import { navigateTo } from './router.js';

export function renderCategories(params) {
  
  const selectBox = document.createElement('select');
  selectBox.setAttribute('name','mainField');
  selectBox.setAttribute('id','mainField');
  selectBox.setAttribute('data-testid','select-filter');

  selectBox.addEventListener('change',function(event){
    const selectBoxOrder = document.querySelector('select#orderDir');
    navigateTo('/',{category:event.target.value,order:selectBoxOrder.value});
  });

  const uniqueCategories = [];// array que contendra categorias unicas

  // filtrar categorias unicas
  for (let i = 0; i < data.length; i++) {
  
    const cardData = data[i];
    for(const category of cardData['facts']['mainField']){
      if(!uniqueCategories.includes(category)){
        uniqueCategories.push(category);
      }
    }
  }

  // agregando la primera opcion
  const defaultOption = document.createElement("option");
  defaultOption.value = '';
  defaultOption.text = "- Filtrar por Categoría -";
  selectBox.add(defaultOption);

  // rellenar el selectBox con opciones de categorias unicas que construimos en arriba
  for(const uniqueCat of uniqueCategories){
    const option = document.createElement("option");
    option.value = uniqueCat;
    option.text = uniqueCat;

    if(params.category===uniqueCat){
      option.setAttribute('selected',true);
    }

    selectBox.add(option);
  }

  return selectBox;
}