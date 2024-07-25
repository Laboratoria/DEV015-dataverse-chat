import header from "../components/header.js";

function apiKey() {
  document.title=`Dataverse Chat - Api Key`;
  const contentHome = document.createElement('div');
  contentHome.appendChild(header());

  const description = `

  <h2>Api Key Admin</h2>
  <h3>Desde aquí puedes administrar la API Key a utilizar </h3>
  <input id="apiKey" placeholder="Escribe la api key aquí"></input>
  <button>Delete</button>
  
  `
  const contentdescription = document.createElement('div');
  contentdescription.innerHTML = description;
  contentHome.appendChild(contentdescription);
  
  return contentHome
  
}
  
export default apiKey;