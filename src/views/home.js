import { navigateTo } from "../router.js";

export default function Home() {
  const viewEl = document.createElement("div");
  viewEl.classList.add("home-container");

  const contentEl = document.createElement("div");
  contentEl.classList.add("content-container");

  const logoEl = document.createElement("img");
  logoEl.src = "./images/logosailor1.png";
  logoEl.alt = "Logo de Mundo Sailor";
  logoEl.classList.add("logo-sailor");
  viewEl.appendChild(logoEl);

  // Luego añade el texto de bienvenida
  viewEl.innerHTML += `
  <p class="home-welcome">✨ <span class="highlight3">¡Bienvenidos a "Mundo Sailor"!✨</span>
  Sumérgete en el mágico universo de Sailor Moon, la emblemática serie creada por  <span class="highlight">Naoko Takeuchi</span>. 
  Explora nuestras secciones para conocer a tus personajes favoritos y descubre  <span class="highlight1">¡ por el poder de la luna !</span>  todo lo que el mundo de Sailor Moon tiene para ofrecerte!</p>
  `;

  // Crea un botón para navegar a la página "Cards"
  const linkEl = document.createElement("button");
  linkEl.textContent = "Ir a mundo Sailor";
  linkEl.classList.add("button-link");

  // Agrega un manejador de eventos al botón
  linkEl.addEventListener("click", (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del enlace
    navigateTo("/character"); // Navega a la página "character" con propiedades
  });

  // Añade el botón al elemento de vista
  viewEl.appendChild(linkEl);

  const bannerContainerEl = document.createElement("div");
  bannerContainerEl.classList.add("banner-container");

  const logoBannerEl = document.createElement("img");
  logoBannerEl.src = "./images/logobanner.png";
  logoBannerEl.alt = "imagen banner";
  logoBannerEl.classList.add("img-banner");
  viewEl.appendChild(logoBannerEl);

  // Devuelve el elemento de vista
  return viewEl;
}
