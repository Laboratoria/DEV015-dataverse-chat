import data from "../data/dataset.js";
import { filterData } from "../lib/dataFunctions.js";
import { card } from "../Components/Card.js";
//import { selectoresOrden, selectoresEpoca } from '../Components/filtroyorden.js'

export const Home = () => {
  const div = document.createElement("div");
  const el = document.createElement("h1");

  el.innerHTML = "Dreamland";
  div.appendChild(el);

  /*const select = document.createElement('label');
    select.textContent = "selecciona por época";
    select.setAttribute('for', 'epoca');
    
    const value = document.createElement('select');
    select.id = 'epoca';
    select.setAttribute('data-testid', 'select-filter');
    select.name = 'epocas';
    const options = [
      { value: '0', text: 'Seleccionar' },
      { value: '1990', text: '1990' },
      { value: '2000', text: '2000' },
      { value: '2010', text: '2010' },
      { value: '2020', text: '2020' }
    ];
    options.forEach(optionData => {
      const option = document.createElement('option');
      option.value = optionData.value;
      option.textContent = optionData.text;
      select.appendChild(option);
  });
    document.el.appendChild(label);
    document.el.appendChild(select);*/

  const showCard = (data) => {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("ulPelis");

    data.forEach((item) => {
      ulElement.appendChild(card(item));
    });
    return ulElement;
  };


  div.appendChild(showCard(data));
  return div;
};

export default Home;
