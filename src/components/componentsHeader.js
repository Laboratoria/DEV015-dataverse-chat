import { navigateTo } from "../router.js";
import { createSelectElements } from "./componentsSelect.js";

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';


  const imageHeader = document.createElement('img')
  imageHeader.setAttribute("src", '../img/IMAGEN HEADER.png');
  imageHeader.className = 'imageHeader';
  imageHeader.id = 'imageHeaderId';

  const titleHeader = document.createElement('h1');
  titleHeader.innerHTML = 'Game Time';

  header.appendChild(imageHeader);
  header.appendChild(titleHeader);

  imageHeader.addEventListener('click', () => {
    navigateTo('/');
  });

  return header;
}

export function createHeaderResponsive(applyFilters) {
  const headerResponsive = document.createElement('header');
  headerResponsive.className = 'headerResponsive';

  const menuResponsive = document.createElement('img')
  menuResponsive.setAttribute("src", '../img/Menu Hamburguesa.png');
  menuResponsive.className = 'menuResponsive';

  const titleHeaderResponsive = document.createElement('h2');
  titleHeaderResponsive.innerHTML = 'Game Time';
  titleHeaderResponsive.className = 'titleHeaderResponsive';

  const imageHeaderResponsive = document.createElement('img')
  imageHeaderResponsive.setAttribute("src", '../img/IMAGEN HEADER RESPONSIVE.png');
  imageHeaderResponsive.className = 'imageHeaderResponsive';
  imageHeaderResponsive.id = 'imageHeaderIdResponsive';

  headerResponsive.appendChild(menuResponsive);
  headerResponsive.appendChild(titleHeaderResponsive);
  headerResponsive.appendChild(imageHeaderResponsive);

  imageHeaderResponsive.addEventListener('click', () => {
    navigateTo('/');
  });


  const overlayMenu = document.createElement('div');
  overlayMenu.className = 'overlayMenu';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'closeOverlay';
  closeBtn.innerHTML = 'X';

  const filterContainer = document.createElement('div');
  filterContainer.className = 'filterContainer'; 

  const selectElements = createSelectElements(applyFilters);
  filterContainer.appendChild(selectElements);

  overlayMenu.appendChild(closeBtn);
  overlayMenu.appendChild(filterContainer);
  document.body.appendChild(overlayMenu);

  menuResponsive.addEventListener('click', () => {
    overlayMenu.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    overlayMenu.style.display = 'none';
  });

  return headerResponsive;
  
}