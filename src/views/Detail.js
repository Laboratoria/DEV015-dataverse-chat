import data from '../../data/dataset.js'; //importa data
import { renderCard } from '../card.js';

const ExtractDataDetailById = (id) => {
  return data.filter((el)=>{ return el.id == id; })[0] || [];
};


const Detail = (params) => {

    const cardData = ExtractDataDetailById(params['id']);
    const view = document.createElement('div');

    if (cardData.length == 0) {
      // si se escribe mal el id, se devolvera un error y no se renderizara la pagina
      view.innerHTML = `
        <h1>Disculpa! no logre encontrar a la persona que buscas</h1>
        <a href="/">Link a Home</a>
      `;
    } else {
      view.classList.add('detail-card')
      view.append(renderCard(cardData, true));
    }

    
    return view;
  };
  
export default Detail;