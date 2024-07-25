import header from "../components/header.js";

function error() {
  document.title=`Dataverse Chat - Error`;

  const contentHome = document.createElement('div');
    
  contentHome.appendChild(header());
  const description = `
  <h2>Esta pagina no existe por favor vuelve al HOME</h2>  
  `
  const contentdescription = document.createElement('div');
  contentdescription.innerHTML = description;
  contentHome.appendChild(contentdescription);
  
  return contentHome;
}
  
export default error;