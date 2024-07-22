export function chatGrupal() {
  const chatDiv = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = 'Chat Grupal';
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Ir a Home';
  homeButton.addEventListener('click', () => {
    window.location.hash = '#/';
  });
  chatDiv.appendChild(title);
  chatDiv.appendChild(homeButton);
  return chatDiv;
}