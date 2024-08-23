export default function renderChat({ id }) {
   // Crea el contenedor para el chat
   const container = document.createElement('div');
   container.id = 'chat-view';
 
   // Agrega un título al chat
   const title = document.createElement('h1');
   title.textContent = `Chat with character ID: ${id}`;
   container.appendChild(title);
 
   // Crea un área para mostrar los mensajes
   const messageArea = document.createElement('div');
   messageArea.id = 'message-area';
   messageArea.classList.add('message-area')
   container.appendChild(messageArea);
 
   // Crea un formulario para enviar mensajes
   const form = document.createElement('form');
   form.id = 'chat-form';
 
   const input = document.createElement('input');
   input.type = 'text';
   input.id = 'messageInput';
   input.classList.add('message-input')
   form.appendChild(input);
 
   const button = document.createElement('button');
   button.type = 'submit';
   button.textContent = 'Enviar';
   form.appendChild(button);
 
   container.appendChild(form);
 
   // Maneja el envío del formulario
   form.addEventListener('submit', function(event) {
     event.preventDefault();
     const message = input.value.trim();
     if (message) {
       const messageElement = document.createElement('p');
       messageElement.textContent = `Tú: ${message}`;
       messageArea.appendChild(messageElement);
       messageArea.scrollTop = messageArea.scrollHeight; // Desplazarse al final del área de mensajes
       input.value = ''; // Limpiar el campo de entrada
     }
   });
 
   // Devuelve el contenedor completo para agregarlo a la página
   return container;
 }