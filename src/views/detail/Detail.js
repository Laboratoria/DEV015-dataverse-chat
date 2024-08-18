import data from '/data/dataset.js'; //importa data
import { renderCard } from '/card.js';
const ExtractDataDetailById = (id) => {
  return data.filter((el)=>{ return el.id == id; })[0] || [];
};


const Detail = (params) => {

    const cardData = ExtractDataDetailById(params['id']);
    const view = document.createElement('div');

    var head  = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    // Set the necessary attributes
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/views/detail/style.css'; 
    head.appendChild(link);


    if (cardData.length == 0) {
      // si se escribe mal el id, se devolvera un error y no se renderizara la pagina
      view.innerHTML = `
        <h1>Disculpa! no logre encontrar a la persona que buscas</h1>
        <a href="/">Link a Home</a>
      `;
    } else {
      view.classList.add('detail-card');
      
      view.append(renderCard(cardData, true));
      const right = document.createElement('div');
      right.classList.add('chat');
      right.innerHTML=`<h2>Chatea Conmigo:</h2>`;
      const messagesDiv = document.createElement('div');
      messagesDiv.classList.add('messages');

      for(let i=0; i<10; i++){
        const p = document.createElement('p');
        p.innerHTML="Lorem ipsum dolor sit amet";
        messagesDiv.appendChild(p);
      }

      const writeDiv = document.createElement('div');
      writeDiv.classList.add('write');

      const div1 = document.createElement('div');
      const textarea = document.createElement('textarea');
      textarea.setAttribute('name','message');
      textarea.setAttribute('rows',6);
      div1.appendChild(textarea);

      const div2 = document.createElement('div');
      const button = document.createElement('button');
      button.setAttribute('type','button');
      button.setAttribute('id','send');
      button.textContent='ENVIAR';

      button.addEventListener('click',function(){
        const messageBox = document.querySelector('textarea[name="message"]');
        alert(messageBox.value);
      });

      div2.appendChild(button);

      writeDiv.appendChild(div1);
      writeDiv.appendChild(div2);

      right.appendChild(messagesDiv);
      right.appendChild(writeDiv);

      view.append(right);
    }

    
    return view;
  };
  
export default Detail;