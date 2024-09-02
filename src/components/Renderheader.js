const renderHeader =  () => { 

  const headerEl = document.createElement('header');
  headerEl.innerHTML = `
    <img src="/imagenes/lady_whistledown-sin fondo.png">
    <h1>Los Bridgerton</h1>
  `;
  return headerEl
}
export default renderHeader;
//cambio para q se haga la branch