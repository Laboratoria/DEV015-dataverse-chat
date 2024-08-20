import  data  from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';
import { card } from '../Components/Card.js';

export const Home = () => {
    const el = document.createElement("h1");
    el.innerHTML = "Dreamland";

  const div = document.createElement('div');
  div.appendChild(el)
  const ulElement = document.createElement('ul');
  const showCard = (data) => {
    data.forEach(item => {

      //const li = document.createElement('li')
      //li.innerHTML = item.id 
      ulElement.appendChild(card)}
  
  );
  return ulElement;
  };
   div.appendChild(showCard(data(item))) 
   return div;
 }



 export default Home;