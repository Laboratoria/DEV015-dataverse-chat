const renderHeader =  () => { 

  const headerEl = document.createElement('header');
  headerEl.innerHTML = `
    <img src="/imagenes/lady_whistledown-sin fondo.png">
    <h1>Los Bridgerton</h1>
    <h2>¡Descubre sus más escandalosos secretos!</h2>
  `;
  return headerEl
}
export default renderHeader;