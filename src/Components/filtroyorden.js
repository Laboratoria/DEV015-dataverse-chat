import data from "../data/dataset.js";
import { filterData, sortData } from "../lib/dataFunctions.js";
import { card } from "./Card.js";
export const filtroyorden = (element) => {
  const updateList = (data) => {
    const lista = showCard(data);
    element.innerHTML = ""; // Limpia el contenido previo
    element.appendChild(lista); // Añade la nueva lista de datos
  };

  const selectores = document.createElement("div");
  selectores.classList.add("selectores");
  selectores.innerHTML = `
  <label for="epoca">
    <span class="tituloSelectores"><b> Selecciona por épocas</b></span></label>
    <select id="epoca" data-testid="select-filter" name="epocas">
      <option value="0">Seleccionar</option>
      <option value="1990">1990</option>
      <option value="2000">2000</option>
      <option value="2010">2010</option>
      <option value="2020">2020</option>
    </select>

    <label for="nombre"><span class="tituloSelectores"><b>Ordena por nombre</b></span></label>
    <select id="nombre" data-testid="select-sort" name="name">
      <option value="orden">Ordenar</option>
      <option value="Asc">A - Z</option>
      <option value="Desc">Z - A</option>
    </select>

    <button id="borrar" data-testid="button-clear">Limpiar Filtros</button>`;

  const selectoresEpoca = selectores.querySelector("#epoca");

  const selectoresOrden = selectores.querySelector("#nombre");

  const buttonBorrar = selectores.querySelector("#borrar");

  const showCard = (data) => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("tarjetita");

    data.forEach((item) => {
      ulElement.appendChild(card(item));
    });
    return ulElement;
  };

  selectoresEpoca.addEventListener("change", (event) => {
    const valor = event.target.value;
    let dataFiltrada;
    if (valor === "0") {
      dataFiltrada = { ...data };
    } else {
      dataFiltrada = filterData(data, "estreno", valor);
    }

    const valorOrden = document.getElementById("nombre").value;
    if (valorOrden !== "orden") {
      dataFiltrada = sortData(dataFiltrada, "name", valorOrden);
    }

    const listaFiltrada = showCard(dataFiltrada);
    element.innerHTML = "";
    element.appendChild(listaFiltrada);
  });

  selectoresOrden.addEventListener("change", (e) => {
    const value = e.target.value;
    let dataOrdenada;
    if (value === "orden") {
      dataOrdenada = data;
    } else {
      dataOrdenada = sortData(data, "name", value);
    }

    const valorFiltro = document.getElementById("epoca").value;
    if (valorFiltro !== "0") {
      dataOrdenada = filterData(dataOrdenada, "estreno", valorFiltro);
    }

    const listaOrdenada = showCard(dataOrdenada);
    element.innerHTML = "";
    element.appendChild(listaOrdenada);
  });

  buttonBorrar.addEventListener("click", () => {
    selectoresOrden.value = "orden";
    selectoresEpoca.value = "0";
    updateList(data, element); // Muestra todos los datos sin filtros ni orden
  });

  return selectores;
};
