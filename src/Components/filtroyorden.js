//import { filterData, sortData } from "../lib/dataFunctions";
import { card } from "./Card";
export const filtroyorden = () => {
  const div = document.createElement("div");
  div.innerHTML = `<label for="epoca"><span class="tituloSelectores"><b> Selecciona por épocas</b></span></label>
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

  const selectoresEpoca = div.querySelector("#epoca");

  const selectoresOrden = div.querySelector("#nombre");

  selectoresEpoca.addEventListener("change", (event) => {
    const valor = event.target.value;
    let dataFiltrada;
    if (valor === "0") {
      dataFiltrada = data;
    } else {
      //   dataFiltrada = filterData(data, "estreno", valor)
    }

    const valorOrden = document.getElementById("nombre").value;
    if (valorOrden !== "orden") {
      // dataFiltrada = sortData(dataFiltrada, "name", valorOrden);
    }

    const listaFiltrada = card(dataFiltrada);
    elementos.innerHTML = "";
    elementos.appendChild(listaFiltrada);
  });

  selectoresOrden.addEventListener("change", (e) => {
    const value = e.target.value;
    let dataOrdenada;
    if (value === "orden") {
      dataOrdenada = data;
    } else {
      // dataOrdenada = sortData(data, "name", value);
    }

    const valorFiltro = document.getElementById("epoca").value;
    if (valorFiltro !== "0") {
      //dataOrdenada = filterData(dataOrdenada, "estreno", valorFiltro);
    }

    const listaOrdenada = card(dataOrdenada);
    elementos.innerHTML = "";
    elementos.appendChild(listaOrdenada);
  });
  return div;
};
