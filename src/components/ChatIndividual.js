/*import petsData from "../data/dataset.js";

export function ChatIndividual(props) {

  const petData = petsData.find((pet) => pet.id === props.id);

  const sectionChat = document.createElement("section");
  sectionChat.classList.add("section-p2");
  sectionChat.id = "banner";

  sectionChat.innerHTML = `
      <div class="item pri">
          <div class="chat-title">
              <div class="chat-title-text">
                  <img class="photo-dog" src="${petData.imageUrl}">
                  <div class="title-details">
                      <h1 class="name">${petData.name}</h1>
                      <span class="title-details-online"><i class="fa-solid fa-circle"></i> Online</span>
                  </div>
              </div>
          </div>
          <div class="chat-message">
              <div class="chat-message-date">
                  <span>May, 14</span>
              </div>
              <div class="chat-message-container">
                  <img class="chat-message-photo" src="${petData.imageUrl}">
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
              <img class="item-sec-img-background" src="${petData.imageUrl}">
          </div>
          <div class="item-sec-text">
              <div class="item-sec-text-name">
                  <span><i class="fa-solid fa-paw fa-beat"></i><a>${petData.name}</a></span>
              </div>
              <div class="item-sec-text-extra-info">
                  <span class="gender"><i class="fa-solid fa-venus-mars"></i> ${petData.facts.gender}</span>
                  <span class="age"><i class="fa-regular fa-clock"></i> ${petData.facts.age.years} years</span>
                  <span class="size"><i class="fa-solid fa-dog"></i> ${petData.facts.size}</span>
                  <span class="behaviour"><i class="fa-sharp fa-regular fa-bone"></i> ${petData.facts.temperament}</span>
              </div>
              <div class="item-sec-text-description">
                  <span>${petData.description}</span>
              </div>
              <div class="item-sec-text-curiosity">
                  <span><i class="fa-sharp-duotone fa-solid fa-heart"></i> ${petData.extraInfo.curiosities}</span>
              </div>
              <div class="item-sec-text-adoption">
                  <button class="adopt-btn">Adopt</button>
                  <button class="donate-btn">Donate</button>
              </div>
          </div>
      </div>
  `;  

  return sectionChat; 
}

export default ChatIndividual;*/