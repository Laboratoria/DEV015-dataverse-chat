export function ChatIndividual() {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h2>Chat Individual</h2>
    <p>Aquí puedes chatear con un personaje seleccionado.</p>
    <div id="chat-container">
      <!-- Aquí irá el contenido del chat -->
    </div>
  `;
  return viewEl;
}

