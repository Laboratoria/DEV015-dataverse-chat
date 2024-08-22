export default function order () {
    const sortEl = document.createElement('select');
    sortEl.setAttribute('id', 'sortBy');
    sortEl.innerHTML = `
        <option value="vacio">Seleccionar opción...</option>
        <option value="asc"> Orden A-Z </option>
        <option value="desc"> Orden Z-A </option>
    `;
    return sortEl;
  }
  