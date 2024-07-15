const header = `

    <!-- IMAGEN TITULO Y EL H1 NO SE VE -->
    <img
      src="https://res.cloudinary.com/db3qclbrk/image/upload/v1719354548/Spider-Man_Across_the_Spider-Verse_logo.webp_ebwb10.png"
      alt="Spiderverse">
    <h1>Spiderverse</h1>

    <!-- BARRA NAV CONTIENE LOS BOTONES DE ORDENAR Y FILTRAR Y RESET -->
    <nav class="controls" id="nav">

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
    </nav>

    <!-- DIV CONTIENE EL BOTON DE HAMBURGESA Y EL DE LAS ESTADISTICAS-->
    <div class="computeStats" id="boxButtoms">
      <div class="burger-container">
        <button id="burger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
      </div>
      <button id="buttonStats">Datos Curiosos</button>
    </div>
    <div id="showStats">
    </div>

`;

export default header;