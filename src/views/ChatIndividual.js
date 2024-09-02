import Footer from "../components/Footer";
import Nav from "../components/Nav";

const individualChat = () => {
  const viewIndividualChat = document.createElement("body");
  viewIndividualChat.setAttribute("class", "body");
  
  // Agregar el header con el componente Nav
  const header = Nav();

  // Crear el main con la sección de la API Key
  const main = document.createElement("main");
  
  //main.innerHTML = ChatIndividual();

  // Crear el footer
  const footer = document.createElement("footer");
  footer.innerHTML = Footer(); // Footer.js para el pie de página
  
  // Agregar los elementos al body
  viewIndividualChat.appendChild(header);
  viewIndividualChat.appendChild(main);
  viewIndividualChat.appendChild(footer);

  return viewIndividualChat;  
};

export default individualChat;