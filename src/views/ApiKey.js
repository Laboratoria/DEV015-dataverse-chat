import renderHeader  from "../components/Renderheader.js"

function ApiKey() {

  const divHome = document.createElement('div');  
  divHome.appendChild (renderHeader());

  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h2>Configuración de API Key</h2>
    <p>Ingresa tu clave API para acceder al chat.</p>
    <input type="text" placeholder="Tu API Key aquí" />
    <button>Guardar</button>
  `;
  
  divHome.appendChild(viewEl)

  return divHome;

}
export default ApiKey;