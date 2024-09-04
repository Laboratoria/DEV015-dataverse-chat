import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";

const individualChat = () => {
  const individualChatView = document.createElement("div");
  individualChatView.className = 'body';

  // Añadir la barra de navegación
  individualChatView.appendChild(Nav());


  const main = document.createElement("main");
  main.innerHTML = `
  <section id="banner" class="section-p2">
      <div class="item pri">
          <div class="chat-title">
              <div class="chat-title-text">
                  <img class="photo-dog" src="img/perro 1.jpeg">
                  <div class="title-details">
                      <h1 class="name">Rex</h1>
                      <span class="title-details-online"><i class="fa-solid fa-circle"></i> Online</span>
                  </div>
              </div>
          </div>
          <div class="chat-message">
              <div class="chat-message-date">
                  <span>May, 14</span>
              </div>
              <div class="chat-message-container">
                  <img class="chat-message-photo" src="img/perro 1.jpeg">
                  <div class="chat-text"><span>Wuf! Got any question?</span></div>
              </div>
          </div>
          <div class="chat-input">
              <textarea class="chat-input-text" placeholder="Write a message"></textarea>
              <button class="chat-input-button" type="submit"><i class="fas fa-paper-plane"></i></button>
          </div>
      </div>
      <div class="item sec">
          <div class="item-sec-img">
              <img class="item-sec-img-background" src="img/perro 1.jpeg">
          </div>
          <div class="item-sec-text">
              <div class="item-sec-text-name">
                  <span><i class="fa-solid fa-paw fa-beat"></i> <a>Rex</a></span>
              </div>
              <div class="item-sec-text-extra-info">
                  <span class="gender"><i class="fa-solid fa-venus-mars"></i> Macho</span>
                  <span class="age"><i class="fa-regular fa-clock"></i> 6 años</span>
                  <span class="size"><i class="fa-solid fa-dog"></i> Grande</span>
                  <span class="behaviour"><i class="fa-sharp fa-regular fa-bone"></i> Enérgico</span>
              </div>
              <div class="item-sec-text-description">
                  <span>Con aproximadamente 8 años, fui rescatado cerca del albergue en Huachipa. Al parecer fui atropellado y mi patita trasera está mal soldada, pero el doctor dice que, debido a mi edad, ya no es recomendable hacer más cirugías. Tengo una energía baja y soy un poco tímido al principio, pero una vez que me conoces, soy muy cariñoso y agradecido. Estoy buscando un hogar donde pueda pasar mis años dorados en paz y con amor. Además, vengo con un kit de adopción completo para asegurarnos de que desde el primer día estemos preparados para compartir nuestro camino juntos.</span>
              </div>
              <div class="item-sec-text-curiosity">
                  <span>Le encanta nadar en el lago</span>
              </div>
              <div class="item-sec-text-adoption">
                  <button class="adopt-btn">Adopt</button>
                  <button class="donate-btn">Donate</button>
              </div>
          </div>
      </div>
  </section>
  `;
  individualChatView.appendChild(main);

  // Añadir el footer
  individualChatView.appendChild(Footer());
  

  return individualChatView; 
};

export default individualChat;