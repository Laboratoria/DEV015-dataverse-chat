import data from '../Data/dataset.js';
import renderCard from '../components/card.js';
import { navigateTo } from '../router.js';
 
export default function Character() {
    const viewEl = document.createElement('div');
    const listEl = document.createElement('ul');
    listEl.classList.add('card-container');

    data.forEach(item => {
        const cardEl = renderCard(item);
        const chatButton = document.createElement('button');
        chatButton.textContent = 'Chatea conmigo';
        chatButton.classList.add('chat-button');
        
        // Manejador de eventos para el botón de chat
        chatButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el clic en el botón propague al elemento cardEl
            navigateTo(`/chat/${item.id}`);
        });
        // Agrega el botón al elemento de tarjeta
        cardEl.appendChild(chatButton);
        listEl.appendChild(cardEl);
    });

    viewEl.appendChild(listEl);
    return viewEl;
}