export default function Order () {
    const sortEl = document.createElement('select');
    sortEl.setAttribute('id', 'sortBy');
    sortEl.innerHTML = `
        <option value="vacio">Orden</option>
        <option value="vacio">Selecciona una opción</option>
        <option value="asc"> Orden A-Z </option>
        <option value="desc"> Orden Z-A </option>
    `;
    return sortEl;
  }
  