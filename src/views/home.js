export function Home() {
  const homeDiv = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = 'Hola Mundo';

  const chatButton = document.createElement('button');
  chatButton.textContent = 'Ir a Chat Grupal';
  chatButton.addEventListener('click', () => {
    window.location.hash = '#/chatGrupal';
  });

  homeDiv.appendChild(title);
  homeDiv.appendChild(chatButton);

  return homeDiv;
}