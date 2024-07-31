 import { navigateTo } from "../router";

export default function Home(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'Welcome to the home page!';
    return viewEl;
    
      linkEl.addEventListener('click', () => navigateTo("/cards", { name: "Xochitl" }));
   return viewEl
  }
  
