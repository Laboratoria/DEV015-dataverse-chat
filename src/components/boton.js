const renderHeader =  () => { 

  const botonEl = document.createElement('boton');
  botonEl.innerHTML = `
      <button type="button" data-testid="button-clear">Despejar</button>
    `;
  return botonEl
}
export default renderHeader;