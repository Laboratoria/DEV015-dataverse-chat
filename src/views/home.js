import { navigateTo } from "../router.js";

export function home() {
  const viewEl = document.createElement('div');
  console.log("hola")
  const title = document.createElement('h1');
  title.textContent = 'Hola Mundo';

  const chatButton = document.createElement('button');
  chatButton.textContent = 'Ir a Chat Grupal';
  chatButton.addEventListener('click', () => {
    navigateTo("/chatGrupal")//como esta en laguia para cada tarjeta
  });

  viewEl.appendChild(title);
  viewEl.appendChild(chatButton);

  return viewEl;
}