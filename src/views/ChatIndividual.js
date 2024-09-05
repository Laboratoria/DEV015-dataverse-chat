import ChatIndividual from "../components/ChatIndividual.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";

export function individualChat(props) {
  const individualChatView = document.createElement("div");
  individualChatView.className = 'body';

  // Añadir la barra de navegación
  individualChatView.appendChild(Nav());

  const mainElement = document.createElement("main");
  mainElement.classList.add("chat-main");
  individualChatView.appendChild(mainElement);
  mainElement.appendChild(ChatIndividual(props));

  // Añadir el footer
  individualChatView.appendChild(Footer());
  

  return individualChatView; 
}

export default individualChat;