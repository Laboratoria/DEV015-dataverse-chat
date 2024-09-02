import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";

const individualChat = () => {
  const individualChatView = document.createElement("div");
  individualChatView.className = 'body';

  // Añadir la barra de navegación
  individualChatView.appendChild(Nav());


  const main = document.createElement("main");
  main.innerHTML = '<h1>Funciona</h1>'
  individualChatView.appendChild(main);

  // Añadir el footer
  individualChatView.appendChild(Footer());
  

  return individualChatView; 
};

export default individualChat;