import data from "../data/dataset.js";
import renderCard from "../components/card.js";
import { navigateTo } from "../router.js";
import filterComponent from "../components/filters.js";
import Order from "../components/order.js";
import { filterData, sortData, computeStats } from "../lib/dataFunction.js";

export default function Character() {
  const viewEl = document.createElement("div");
  viewEl.classList.add("container-max");

  // Contenedor para filtros y orden
  const filtersContainer = document.createElement("div");
  filtersContainer.classList.add("filters-container");
  viewEl.appendChild(filtersContainer);

  const wingEl = document.createElement("img");
  wingEl.src = "./images/cat.png";
  wingEl.alt = "wing sailor filters";
  wingEl.classList.add("cat");
  viewEl.appendChild(wingEl);

  const searchEl = document.createElement("p");
  searchEl.textContent = "¡Busca tu Sailor!";
  searchEl.classList.add("search");
  filtersContainer.appendChild(searchEl);

  // Filtro, orden y limpiar
  const filterEl = filterComponent();
  filterEl.classList.add("filter-select");
  filtersContainer.appendChild(filterEl);

  const orderEl = Order();
  orderEl.classList.add("sortBy");
  filtersContainer.appendChild(orderEl);

  const clearButton = document.createElement("button");
  clearButton.textContent = "Limpiar filtros";
  clearButton.classList.add("clear-filters");
  filtersContainer.appendChild(clearButton);

  // Crear el div para mostrar las estadísticas
  const resultadoDiv = document.createElement("button");
  resultadoDiv.textContent = "Estadisticas Sailor";
  resultadoDiv.setAttribute("type", "resultado");
  resultadoDiv.classList.add("resultado-div");
  filtersContainer.appendChild(resultadoDiv);

  // Crear y agregar lista de tarjetas
  const listEl = document.createElement("ul");
  listEl.classList.add("card-container");
  viewEl.appendChild(listEl);

  // Función para cargar las tarjetas
  function load(data) {
    listEl.innerHTML = "";
    data.forEach((item) => {
      const cardEl = renderCard(item);
      const chatButton = document.createElement("button");
      chatButton.textContent = "Chatea conmigo";
      chatButton.classList.add("chat-button");

      // Manejador de eventos para el botón de chat
      chatButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que el clic en el botón propague al elemento cardEl
        navigateTo(`/chat/${item.id}`);
      });

      cardEl.appendChild(chatButton);
      listEl.appendChild(cardEl);
    });
  }

  // Cargar los datos iniciales
  load(data);

  // Función para actualizar la vista según los filtros y el orden
  function updateView() {
    const valorSeleccionadoFilterBy = filterEl.value;
    const sortOrder = orderEl.value;
    const copiaData = [...data];

    let dataFiltrada = copiaData;
    if (valorSeleccionadoFilterBy !== "") {
      dataFiltrada = filterData(
        copiaData,
        "tipoGuardian",
        valorSeleccionadoFilterBy,
      );
    }
    const dataOrdenada = sortData(dataFiltrada, "name", sortOrder);
    load(dataOrdenada);

    // Ahora calculamos y mostramos las estadísticas
    const totalPersonajes = data.length;
    const estadisticas = computeStats(dataFiltrada, totalPersonajes);

    resultadoDiv.innerHTML = `
            <p>Porcentaje: ${estadisticas.porcentajeTipoGuardian.toFixed(2)}%, de tipo: ${valorSeleccionadoFilterBy}</p>
            <p>Nombres: ${estadisticas.tipoGuardian.join(", ")}</p>
        `;
  }

  // Eventos de cambio para los filtros y el orden
  filterEl.addEventListener("change", updateView);
  orderEl.addEventListener("change", updateView);
  resultadoDiv.addEventListener("change", updateView);

  // Evento para el botón de limpiar filtros
  clearButton.addEventListener("click", function () {
    filterEl.value = ""; // Limpiar selección del filtro
    orderEl.value = "asc"; // Establecer orden por defecto
    resultadoDiv.value = "none";
    updateView();
  });

  return viewEl;
}
