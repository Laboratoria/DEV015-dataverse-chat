import { filterData, sortData } from "../lib/dataFunctions";

const selectoresEpoca = document.querySelector("#epoca");
const selectoresOrden = document.querySelector("#nombre");


selectoresEpoca.addEventListener("change", (event) => { 
    const valor = event.target.value;
    let dataFiltrada;
    if (valor === "0") {
      dataFiltrada = data;
    } else {
      dataFiltrada = filterData(data, "estreno", valor)
    }
    
    const valorOrden = document.getElementById("nombre").value;
    if (valorOrden !== "orden") {
      dataFiltrada = sortData(dataFiltrada, "name", valorOrden);
    }
  
    
    const listaFiltrada = renderItems(dataFiltrada);
    elementos.innerHTML = "";
    elementos.appendChild(listaFiltrada);
  
  });
  
  selectoresOrden.addEventListener("change", (e) => {
    const value = e.target.value;
    let dataOrdenada;
    if (value === "orden") {
      dataOrdenada = data;
    }  else {
      dataOrdenada = sortData(data, "name", value);
    }
  
    const valorFiltro = document.getElementById("epoca").value;
    if (valorFiltro !== "0") {
      dataOrdenada = filterData(dataOrdenada, "estreno", valorFiltro);
    }
    
    const listaOrdenada = renderItems(dataOrdenada);
    elementos.innerHTML = "";
    elementos.appendChild(listaOrdenada);
  });
  