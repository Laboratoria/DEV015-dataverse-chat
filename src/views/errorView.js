export default function ErrorView() {
  const viewEl = document.createElement("div");
  viewEl.classList.add("container-error")

  viewEl.innerHTML = `
      <h1 class="error-h">404 - Página no encontrada</h1>
      <p class="error-p">¡Lo siento, la página que buscas no existe!</p>
  `;

  return viewEl;
}
