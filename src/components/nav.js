const navbar = () => {
  const contentNav = document.createElement("nav");
  contentNav.classList.add("controls");
  contentNav.setAttribute("id", "nav");
  contentNav.innerHTML = `
<div class="select-box">
        <label for="filter">Filtrar por: </label>
        <select data-testid="select-filter" name="gender age" id="filter">
          <option value="" disabled selected>Selecciona</option>
          <optgroup label="Genero">
            <option value="M" class="filter-option">Masculino</option>
            <option value="F" class="filter-option">Femenino</option>
          </optgroup>
          <optgroup label="Edad">
            <option value="1" class="filter-option">Jovenes</option>
            <option value="2" class="filter-option">Adultos jovenes</option>
            <option value="3" class="filter-option">Adultos</option>
          </optgroup>
        </select>
      </div>

      <div class="select-box">
        <label for="sort-order">Ordenar por:</label>
        <select data-testid="select-sort" id="sort-order" name="name">
          <option value="" disabled selected>Selecciona</option>
          <optgroup label="Por nombre">
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </optgroup>
        </select>
      </div>

      <button data-testid="button-clear">Limpiar</button>
    

    <button id="buttonStats">Datos Curiosos</button>
    </div>
    <div id="showStats">
    </div>
`;
  return contentNav;
};

export default navbar;
