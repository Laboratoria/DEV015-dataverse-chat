export default function ErrorView() {
  const viewEl = document.createElement("div");
  viewEl.innerHTML = `
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
  `;

  return viewEl;
}
