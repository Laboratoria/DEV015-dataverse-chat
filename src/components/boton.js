const renderHeader =  () => { 

  const botonEl = document.createElement('div');
  botonEl.innerHTML = `
      <button type="button" data-testid="button-clear">Despejar</button>
    `;
  return botonEl
}
export default renderHeader;