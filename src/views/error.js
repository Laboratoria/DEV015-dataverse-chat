import header from "../components/header.js";

function error() {

  const contentHome = document.createElement('div');
    
  const contentHeader = document.createElement('header');
  contentHeader.innerHTML = header
  contentHome.appendChild(contentHeader)  


  const description = `

  <h2>Esta pagina no existe por favor vuelve al HOME</h2>
  
  
  `
  const contentdescription = document.createElement('div');
  contentdescription.innerHTML = description
  contentHome.appendChild(contentdescription)
  
  
  return contentHome
  
}
  
export default error;