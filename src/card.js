import { navigateTo } from '../../router.js';

export const renderCard = (card, full_data=false) => {  //creando la constante para importarla en view.js
  
  const ul = document.createElement("ul"); //creando el ul
  ul.classList.add("card"); //agregando la clase card
  ul.setAttribute("itemscope", ""); // Indicando que es un contenedor de datos
  ul.setAttribute("itemtype", "https://schema.org/Person"); // Especificando el tipo de datos 

  ul.addEventListener('click',function(){
    navigateTo('/detail',{id: card['id']});
  });
    
  // revisamos si tiene fecha de la muerte. porque no todos tienen este dato
  const yearOfDeath = card['facts']['yearOfDeath'] ? card['facts']['yearOfDeath'] : '-';
  let datos = `
      <li itemprop="image" class="item"><img src="${card['imageUrl']}" alt="Imagen de ${card['name']}" /></li>
      <li itemprop="name" class="item">Nombre: ${card['name']}</li>`; //creando tarjeta que contiene informacion, debe ser trabajada en css
  if (full_data){
    datos = datos + `<li itemprop="description" class="item">Descripción: ${card['shortDescription']}</li>
      <li itemprop="birthDate" class="item">Año de Nacimiento: ${card['facts']['yearOfBirth']}</li>
      <li itemprop="deathDate" class="item">Fecha de Muerte: ${yearOfDeath}</li>
      <li itemprop="birthPlace" class="item">Lugar de Nacimiento: ${card['facts']['birthPlace']}</li>
      <li itemprop="field" class="item">Especialidad: ${card['facts']['mainField']}</li>
      `;  // si se necesitan todos los datos, se agregan si se pasa el parametro full como true
  }

  ul.innerHTML = datos; //indicandole al ul que contendra el bloque html de la tarjeta
  return ul; //retornando div
}