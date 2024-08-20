import  data  from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';
import { card } from '../Components/Card.js';

export const Home = () => {
    const el = document.createElement("h1");
    el.innerHTML = "Dreamland";

  const div = document.createElement('div');
  div.appendChild(el)
    
  const showCard = (data) => {
    const ulElement = document.createElement('ul');
    
    data.forEach(item => {
      /*const li = document.createElement('li')
      li.innerHTML = item.id */
      ulElement.appendChild(card(item))}
  
  );
  return ulElement;
  };
   div.appendChild(showCard(data)) 
   return div;
 }



 export default Home;