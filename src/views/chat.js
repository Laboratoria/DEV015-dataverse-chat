export default function chat() {
    // Crea el contenedor principal del chat
    const viewEl = document.createElement('div');
    viewEl.innerHTML = `
      <h1>Chat</h1>
      <div id="chatMessages" style="border: 1px solid #ddd; height: 300px; overflow-y: scroll; ;"></div>
      <textarea id="chatInput" placeholder="Escribe tu mensaje aquí..." style="width: 100%; height: 50px;"></textarea>
      <button id="sendMessageButton">Enviar</button>
    `;
    
    // Referencias a los elementos del chat
    const chatMessages = viewEl.querySelector('#chatMessages');
    const chatInput = viewEl.querySelector('#chatInput');
    const sendMessageButton = viewEl.querySelector('#sendMessageButton');
    
    // Función para agregar un mensaje al área de mensajes
    function addMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Desplaza hacia abajo para ver el mensaje más reciente
    }
    
    // Evento para enviar un mensaje cuando se hace clic en el botón
    sendMessageButton.addEventListener('click', () => {
      const message = chatInput.value.trim();
      if (message) {
        addMessage(`Tú: ${message}`); // Mostrar el mensaje en el chat
        chatInput.value = ''; // Limpiar el campo de entrada
        // Aquí puedes agregar la lógica para enviar el mensaje a un servidor si es necesario
      }
    });
    
    // También podrías permitir el envío de mensajes al presionar Enter
    chatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Evita que se inserte un salto de línea
        sendMessageButton.click(); // Simula un clic en el botón de enviar
      }
    });
  
    return viewEl;
  }
  