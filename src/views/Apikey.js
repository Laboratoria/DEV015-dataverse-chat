import Apikey from "../components/Apikey.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";

const viewApi = () => {
  const viewApiKey = document.createElement("body");
  viewApiKey.setAttribute("class", "body");
  
  // Agregar el header con el componente Nav
  const header = Nav();

  // Crear el main con la sección de la API Key
  const main = document.createElement("main");
  main.innerHTML = Apikey(); // ApiKeySection.js para la sección de la API key

  // Crear el footer
  const footer = document.createElement("footer");
  footer.innerHTML = Footer(); // Footer.js para el pie de página
  
  // Agregar los elementos al body
  viewApiKey.appendChild(header);
  viewApiKey.appendChild(main);
  viewApiKey.appendChild(footer);

  return viewApiKey;
  
};

export default viewApi;