import { filterData, sortData, computeStats, averageStats,} from ".../lib/dataFunctions.js";
import data from "../data/dataset.js";
  
//FILTRO----------------------------------------------------------------------------------------------------
const filter = document.querySelector("#filter");
let newFilterData;

filter.addEventListener("change", (event) => {
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
  render.innerHTML = "";
  render.appendChild(renderItems(newFilterData));
});

//SORT----------------------------------------------------------------------------------------------------
const sort = document.querySelector("#sort-order");

sort.addEventListener("change", (event) => {
  const sortValue = event.target.value;
  let orderData;
  
  if (newFilterData) {
    orderData = sortData(newFilterData, "name", sortValue);
  } else {
    orderData = sortData(data, "name", sortValue);
  }

  render.innerHTML = "";
  render.appendChild(renderItems(orderData));
});
