import { data } from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';
import { card } from '../Components/card.js';

export const Home = () => {
    const el = document.createElement("h1");
    el.innerHTML = "Dreamland";

  const card = (data) => {
    const ulElement = document.createElement('ul');
    data.forEach(item =>
      ulElement.appendChild(createCard(item))
    );
  return ulElement;
  };
    
   return el;
 }



 export default Home;