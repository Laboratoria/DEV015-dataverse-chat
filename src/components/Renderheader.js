export function renderHeader(element) {
  const headerEl = document.createElement('header');
  headerEl.innerHTML = `
    <h1>My Application Header</h1>
    <!-- Aquí va el contenido de tu header -->
  `;
  element.appendChild(headerEl); // Añade el header al contenedor
}
