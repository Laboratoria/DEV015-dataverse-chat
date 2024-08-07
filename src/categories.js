import data from './data/dataset.js'; //importa data

export function renderCategories(selectBox) {
  
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
    selectBox.add(option);
  }

}