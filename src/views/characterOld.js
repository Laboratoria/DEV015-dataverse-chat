import data from '../Data/dataset.js';
import renderCard from '../components/card.js';
import { navigateTo } from '../router.js';


export default function Character() {
    const viewEl = document.createElement('div');
    const listEl = document.createElement('ul');
    listEl.classList.add('card-container');

    data.forEach(item => {
        const cardEl = renderCard(item);

        cardEl.addEventListener('click', () => {
            navigateTo(`/chat/${item.id}`);
        });

        listEl.appendChild(cardEl);
    });

    viewEl.appendChild(listEl);
    return viewEl;
}