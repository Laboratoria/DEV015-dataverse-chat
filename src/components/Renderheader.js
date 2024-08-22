export function renderHeader (){
  console.log('renderHeader se ha llamado'); // Verifica si la función se está ejecutando|
  const viewEl = document.createElement ('div');
  viewEl.innerHTML = `
    <header>
    <img src="src/imagenes/lady_whistledown-sin fondo.png">
    <h1>Los Bridgerton</h1>
    <h2>¡Descubre sus más escandalosos secretos!</h2>
    </header>
    `;
  document.getElementById('root').appendChild(viewEl); // Agregar el header al contenedor con el ID 'root'
}