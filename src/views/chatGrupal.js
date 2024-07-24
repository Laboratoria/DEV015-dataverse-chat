import { navigateTo } from "../router.js";

export function chatGrupal() {
  const viewEl = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = 'Chat Grupal';
  const Button = document.createElement('button');
  
  Button.textContent = 'Ir a Home';
  Button.addEventListener('click', () => {
    navigateTo("/principal")//como esta en laguia para cada tarjeta

  });
  viewEl.appendChild(title);
  viewEl.appendChild(Button);
  return viewEl;
}

