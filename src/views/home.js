import { navigateTo } from "../router.js";

export function Principal() {
  const viewEl = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = 'Hola Mundo';

  const Button = document.createElement('button');
  Button.textContent = 'Ir a Chat Grupal';
  Button.addEventListener('click', () => {
    navigateTo("/chatGrupal")//como esta en laguia para cada tarjeta
  });

  viewEl.appendChild(title);
  viewEl.appendChild(Button);

  return viewEl;
}