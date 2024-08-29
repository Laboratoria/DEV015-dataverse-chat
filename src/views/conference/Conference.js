import data from '/data/dataset.js'; //importa data
import { renderChat } from '/views/chat/Chat.js';


const Conference = () => {
  // habilitar el botton volver a pagina principal
  const returnHomeButton = document.getElementById('return-home');
  returnHomeButton.classList.remove('hidden');

  const view = document.createElement('div');

  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  // Set the necessary attributes
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '/views/conference/style.css';
  head.appendChild(link);
  view.append(renderChat(data, true));
  return view;
};

export default Conference;