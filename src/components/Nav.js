import { navigateTo } from "../router.js";

export const Nav = () => {
 
  const header = document.createElement("header");

  header.innerHTML = `
 
<!----------------------- Mobile Structure ----------------------->


<!-- Mobile Sidebar -->

      <aside class="sidebar">
          <ul>
              <div class="btn-close" >
                  <li><i class="fa-solid fa-xmark"></i></li>
              </div>
              <li>Adoptions</li>
              <li>Apikey</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Contact</li>
              <li class="li-sidebar-donations">Help here</li>
          </ul>

      </aside>


<!----------------------- Desktop Structure ----------------------->

<!-- Desktop Navbar -->

      <nav>
          <div class="menu-btn">
              <i class="fa-solid fa-bars"></i>
          </div>
          <ul>
            <h1 class="logo">Patitas</h1>
          </ul>
          <ul class="navbar-options">
              <li>Adoptions</li>
              <li class="about-us">Apikey</li>
              <li class="individual-chat">FAQ</li>
              <li>Blog</li>
              <li>Contact</li>
          </ul>
      </nav>`

      
  // Lógica de inicialización (no dependas de DOMContentLoaded)
  generateButtons(header);
  

  return header;

}

export function generateButtons(header){
  
  const logoEl = header.querySelector('.logo');
  // Selecciona el botón de menú y la barra lateral
  const menuBtn = header.querySelector('.menu-btn');
  const sidebar = header.querySelector('.sidebar');
  const closeBtn = header.querySelector('.btn-close i');

  if (logoEl) {
    logoEl.addEventListener('click', () => {
      navigateTo("/"); // Navegar a la página principal
      console.log("funciona");
    });
  } else {
    console.error('El elemento con clase "logo" no se encuentra en el DOM.');
  }
  
  const aboutUsEl = header.querySelector('.about-us');
  if (aboutUsEl) {
    aboutUsEl.addEventListener('click', () => {
      navigateTo("/apiKey"); // Navegar a la página de API Key
      console.log("funciona");

    });
  } else {
    console.error('El elemento con clase "about-us" no se encuentra en el DOM.');
  }

  // Verificación para el botón de menú y la barra lateral
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {

      console.log("funciona");
      // Alterna el estado de la barra lateral
      if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px'; // Mueve la barra lateral fuera de vista
      } else {
        sidebar.style.left = '0px'; // Mueve la barra lateral a la vista
      }
    });
  } else {
    console.error('Los elementos "menuBtn" o "sidebar" no se encuentran en el DOM.');
  }

  // Verificación para el botón de cierre de la barra lateral
  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => {
      sidebar.style.left = '-300px';
    });
  } else {
    console.error('Los elementos "btnCloseIcon" o "sidebar" no se encuentran en el DOM.');
  }

}
