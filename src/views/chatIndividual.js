import renderHeader  from "../components/Renderheader.js"

export function chatIndividual() {
  const divHome = document.createElement('div');  
  divHome.appendChild (renderHeader());

  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h2>Chat Individual</h2>
    <p>Aquí puedes chatear con un personaje seleccionado.</p>
    <div id="chat-container">
      <!-- Aquí irá el contenido del chat -->
    </div>
  `;
  divHome.appendChild(viewEl)

  return divHome;
}
export default chatIndividual;
