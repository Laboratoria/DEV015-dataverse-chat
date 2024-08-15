//Crea un nuevo elemento div,le asigna texto como su contenido
// y devuelve ese div para que se pueda utilizar en otras partes
export function ApiKey() {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h2>Configuración de API Key</h2>
    <p>Ingresa tu clave API para acceder al chat.</p>
    <input type="text" placeholder="Tu API Key aquí" />
    <button>Guardar</button>
  `;
  return viewEl;
}