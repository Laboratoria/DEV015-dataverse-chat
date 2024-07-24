import { navigateTo } from "../router.js";
// eslint-disable-next-line no-unused-vars
export function chatGrupal(props) {// 
  const viewEl = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = 'Chat Grupal';


  const Button = document.createElement('button');
  Button.textContent = 'Ir a Home';
  Button.addEventListener('click', () => {
    navigateTo("/principal")//NO LOGRO QUE REGRESAR A LA PRINCIPAL

  });
  /*const link = document.createElement('a');
  link.href = "#";
  link.textContent = 'Ir a Home (enlace)';
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    navigateTo("/principal"); // Navega a la página de inicio
  });*/


  viewEl.appendChild(title);
  viewEl.appendChild(Button);
  //viewEl.appendChild(link);

  return viewEl;
}

