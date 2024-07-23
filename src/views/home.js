import header from "../components/header.js";
import navbar from "../components/nav.js";
import footer from "../components/footer.js";
import data from "../data/dataset.js";
import { renderItems } from "../components/cards.js";
import {
  filterData,
  sortData,
  computeStats,
  averageStats,
} from "../lib/dataFunctions.js";

function home() {
  const contentHome = document.createElement("div");

  //HEADER----------------------------------------------------
  contentHome.appendChild(header());
  //NAV---------------------------------------------------------
  contentHome.appendChild(navbar());

  // datafunctions.........................................
  const filter = contentHome.querySelector("#filter");
  const sort = contentHome.querySelector("#sort-order");
  const buttonReset = contentHome.querySelector(
    "button[data-testid='button-clear']"
  );
  const buttonStats = contentHome.querySelector("#buttonStats");
  const showStats = contentHome.querySelector("#showStats");
  
  //---------FILTER------------------------------
  let newFilterData;
  function eventFilter(event) {
    const filterValue = event.target.value;

    if (filterValue === "M" || filterValue === "F") {
      newFilterData = filterData(data, "gender", filterValue);
    }
    if (filterValue === "1" || filterValue === "2") {
      newFilterData = filterData(data, "age", filterValue);
    }
    if (filterValue === "3") {
      newFilterData = filterData(data, "age", "3").concat(
        filterData(data, "age", "4")
      );
    }

    sort.value = "";
    renderCards.innerHTML = "";
    renderCards.appendChild(renderItems(newFilterData));
  }

  //------------------SORT----------------------------------------------------------------------------------------------------
  function eventSort(event) {
    const sortValue = event.target.value;
    let orderData;

    if (newFilterData) {
      orderData = sortData(newFilterData, "name", sortValue);
    } else {
      orderData = sortData(data, "name", sortValue);
    }

    renderCards.innerHTML = "";
    renderCards.appendChild(renderItems(orderData));
  }

  // BOTON RESET---------------------------------------------------------------------------------------
  function eventReset() {
    renderCards.innerHTML = "";
    filter.value = "";
    sort.value = "";
    newFilterData = "";

    renderCards.appendChild(renderItems(data));
  }

  //STATS
  function eventStats() {
    //ESTADISTICAS DE GENERO----------------------------------------------------------------------------
    const dataFemenino = filterData(data, "gender", "F");

    const divGender = document.createElement("div");
    divGender.classList.add("stats");
    divGender.innerHTML =
      "<p>El <span>" +
      computeStats(dataFemenino, data) +
      "%</span> son del genero Femenino</p>";
    showStats.appendChild(divGender);

    //ESTADISTICAS DE CITY----------------------------------------------------------------------------
    const ny = filterData(data, "city", "N");

    const divCity = document.createElement("div");
    divCity.classList.add("stats");
    divCity.innerHTML =
      "<p>El <span>" +
      computeStats(ny, data) +
      "%" +
      "</span> viven en la ciudad de Nueva York</p>";
    showStats.appendChild(divCity);

    //ESTADISTICAS DE EDAD----------------------------------------------------------------------------
    const age = averageStats(data);

    const divAge = document.createElement("div");
    divAge.classList.add("stats");
    divAge.innerHTML =
      "<p>La edad promedio de los Spider Man es <span>" +
      age +
      "</span> años </p>";
    showStats.appendChild(divAge);

    //MUESTRA LAS ESTADISTICAS ----------------------------------------------------------------------------
    if (showStats.style.display === "flex") {
      showStats.style.display = "none";
      showStats.innerHTML = "";
    } else {
      showStats.style.display = "flex";
    }
  }


  filter.addEventListener("change", eventFilter);
  sort.addEventListener("change", eventSort);
  buttonReset.addEventListener("click", eventReset);
  buttonStats.addEventListener("click", eventStats);

  //CARDS-------------------------------------------------------------
  const renderCards = document.createElement("div");
  renderCards.appendChild(renderItems(data));
  contentHome.appendChild(renderCards);

  //FOOTER-----------------------------------------------------------------
  contentHome.appendChild(footer());

  return contentHome;
}
