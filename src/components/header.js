import { navigateTo } from "../router.js";

const header = () => {
  const contentHeader = document.createElement("header");
  contentHeader.setAttribute("id", "header-nav");
  contentHeader.classList.add("header-nav");
  contentHeader.innerHTML = `
  
    <!-- IMAGEN TITULO Y EL H1 NO SE VE -->
    <div class='content-header'>
      <img
        src="https://res.cloudinary.com/db3qclbrk/image/upload/v1719354548/Spider-Man_Across_the_Spider-Verse_logo.webp_ebwb10.png"
      alt="Spiderverse">
      
      <div class="burger-container">
        <button id="burger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
      </div>
    </div>
  
    <div class='container-button-header' id='container-buttons'>
      <button class="buttonHeader" id="buttonHome"> HOME</button>
      <button class="buttonHeader" id="buttonChatGrupal"> SPIDER CHAT</button>
      <button class="buttonHeader" id="buttonApiKey"> API KEY</button>
    </div>
  
    
    <!-- DIV CONTIENE EL BOTON DE HAMBURGESA Y EL DE LAS ESTADISTICAS-->
    <div class="computeStats" id="boxButtoms">
    </div>
  `;

  const headerNav = contentHeader.querySelector("#container-buttons");
  const boxButtoms = contentHeader.querySelector("#boxButtoms");
  const burger = contentHeader.querySelector("#burger");
  const buttonHome = contentHeader.querySelector("#buttonHome")
  const buttonChatGrupal = contentHeader.querySelector("#buttonChatGrupal")
  const buttonApiKey = contentHeader.querySelector("#buttonApiKey")

  function eventBurger() {
    if (headerNav.style.display === "flex") {
      headerNav.style.display = "none";
    } else {
      headerNav.style.display = "flex";
    }

    boxButtoms.parentNode.insertBefore(headerNav, boxButtoms.nextSibling);

  }

  burger.addEventListener("click", eventBurger);

  buttonHome.addEventListener("click", () => {
    navigateTo("/")
  })
  buttonChatGrupal.addEventListener("click", () => {
    navigateTo("/panel")
  })
  buttonApiKey.addEventListener("click", () => {
    navigateTo("/api-key") 
  }) 
  return contentHeader;
};
export default header;
