export function Home() {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>Bienvenido al Dataverse Chat</h1>
    <p>Explora y conéctate con otros personajes.</p>
  `;
  return viewEl;
}
