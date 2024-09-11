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
  const apiKeySection = Apikey(); 

  if (apiKeySection instanceof HTMLElement) {
    main.appendChild(apiKeySection); // Si es un elemento HTML, lo añadimos
  } 

  // Crear el footer
  const footer = Footer();
  viewApiKey.appendChild(footer);

  // Agregar los elementos al body
  viewApiKey.appendChild(header);
  viewApiKey.appendChild(main);
  viewApiKey.appendChild(footer);

  return viewApiKey;
  
};

export default viewApi;