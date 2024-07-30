import { navigateTo } from "../router";

export function Home(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'Welcome to the home page!';
    return viewEl;
    
     linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }));
  // return el
  }
  
