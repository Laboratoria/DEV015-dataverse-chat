import data from '/data/dataset.js'; //importa data
import { renderCard } from '/card.js';
import { renderChat } from '/views/chat/Chat.js';


const ExtractDataDetailById = (id) => {
  return data.filter((el) => { return el.id === id; })[0] || [];
};

const Detail = (params) => {

  const cardData = ExtractDataDetailById(params['id']);
  const view = document.createElement('div');

  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  // Set the necessary attributes
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '/views/detail/style.css';
  head.appendChild(link);


  if (cardData.length === 0) {
    // si se escribe mal el id, se devolvera un error y no se renderizara la pagina
    view.innerHTML = `
        <h1>Disculpa! no logre encontrar a la persona que buscas</h1>
        <a href="/">/home/home.js</a>
      `;
  } else {
    view.classList.add('detail-card');

    view.append(renderCard(cardData, true));
    view.append(renderChat(cardData));


  }
  return view;
};

export default Detail;