// componentsSelect.js
export function createSelectElements() {
  // const container = document.createElement('div');
  // container.classList.add('contenedor');

  const sidebar = document.createElement('div');
  sidebar.classList.add('barra-lateral');
  sidebar.id = 'barra-lateral';

  const filtros = document.createElement('div');
  filtros.classList.add('filtros');

  // Crear y añadir el filtro de categoría
  const labelCategoria = document.createElement('label');
  labelCategoria.textContent = 'Categoría:';
  const selectCategoria = document.createElement('select');
  selectCategoria.id = 'filtro-categoria';
  selectCategoria.name = 'select';
  const categorias = ['Seleccionar', 'Acción', 'Aventura', 'Rol (RPG)', 'Estrategia'];
  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.textContent = categoria;
    selectCategoria.appendChild(option);
  });

  filtros.appendChild(labelCategoria);
  filtros.appendChild(selectCategoria);

  // Crear y añadir el filtro de año
  const labelAño = document.createElement('label');
  labelAño.textContent = 'Año:';
  const selectAño = document.createElement('select');
  selectAño.id = 'filtro-año';
  const años = ['Seleccionar', '2010', '2011', '2012', '2013', '2015', '2016', '2017', '2018', '2019', '2020'];
  años.forEach(año => {
    const option = document.createElement('option');
    option.textContent = año;
    selectAño.appendChild(option);
  });

  filtros.appendChild(labelAño);
  filtros.appendChild(selectAño);

  // Crear y añadir el filtro de ranking
  const labelRanking = document.createElement('label');
  labelRanking.textContent = 'Ranking:';
  const selectRanking = document.createElement('select');
  selectRanking.id = 'filtro-ranking';
  const rankings = ['Seleccionar', '5.0', '4.5', '4.0', '3.5'];
  rankings.forEach(ranking => {
    const option = document.createElement('option');
    option.textContent = ranking;
    selectRanking.appendChild(option);
  });

  filtros.appendChild(labelRanking);
  filtros.appendChild(selectRanking);

  // Crear y añadir el filtro de orden alfabético
  const labelOrden = document.createElement('label');
  labelOrden.textContent = 'Orden alfabético:';
  const selectOrden = document.createElement('select');
  selectOrden.id = 'ordenar';
  const ordenes = ['Seleccionar', 'Ascendente', 'Descendente'];
  ordenes.forEach(orden => {
    const option = document.createElement('option');
    option.textContent = orden;
    selectOrden.appendChild(option);
  });

  filtros.appendChild(labelOrden);
  filtros.appendChild(selectOrden);

  // Crear y añadir el botón de limpiar filtros
  const buttonLimpiar = document.createElement('button');
  buttonLimpiar.classList.add('limpiar-filtros');
  buttonLimpiar.innerHTML = '<b>Limpiar</b>';

  filtros.appendChild(buttonLimpiar);

  sidebar.appendChild(filtros);
  console.log('Se carga select');
  return sidebar;


  // // Crear y añadir el ranking por año
  // const rankingPorAño = document.createElement('div');
  // rankingPorAño.id = 'ranking-por-año';
  // rankingPorAño.innerHTML = `
  //     <p>Ranking Promedio</p>
  //     <p><b>2016</b></p>
  //     <h2 id="rankingPromedio2016"></h2>
  // `;
  // sidebar.appendChild(rankingPorAño);

  // // Crear y añadir el mejor categoría
  // const mejorCategoria = document.createElement('div');
  // mejorCategoria.id = 'mejor-categoria';
  // mejorCategoria.innerHTML = `
  //     <p>Mejor Rankeado</p>
  //     <p><b>Categoria</b></p>
  //     <h2 id="mejorRanking"></h2>
  // `;
  // sidebar.appendChild(mejorCategoria);

  // container.appendChild(sidebar);

  // Añadir el contenedor principal al rootElement

}