const ordenado = () => {
  const ordenadoEl = document.createElement('nav'); // Usar un 'div' en lugar de 'ordenado'
  ordenadoEl.innerHTML = `
      <label for="alfabetico" id="alfabe">Ordenar por:</label>
      <select id="alfabetico" data-testid="select-sort" name="alfabetico">
        <option value=""> </option>
        <option value="asc">Ordenar A-Z</option>
        <option value="des">Ordenar Z-A</option>
      </select>   
    `;
  return ordenadoEl;
}
  
export default ordenado;
  