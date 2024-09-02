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
              <li>About us</li>
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
              <li class="about-us">About us</li>
              <li class="individual-chat">FAQ</li>
              <li>Blog</li>
              <li>Contact</li>
          </ul>
      </nav>`


  const logoEl = header.querySelector('.logo');
  if (logoEl) {
    logoEl.addEventListener('click', () => {
      navigateTo("/"); // Navegar a la página about
    });
  } else {
    console.error('El elemento con clase "logoEl" no se encuentra en el DOM.');
  }

  const aboutUsEl = header.querySelector('.about-us');
  if (aboutUsEl) {
    aboutUsEl.addEventListener('click', () => {
      navigateTo("/apiKey"); // Navegar a la página about
    });
  } else {
    console.error('El elemento con clase "apiKey" no se encuentra en el DOM.');
  }

  const individualChatButton = header.querySelector('.individual-chat');
  if(individualChatButton){
    individualChatButton.addEventListener('click', () => {
      navigateTo("/individualChat");
    });
  } else {
    console.error('El elemento con clase "individualChat" no se encuentra en el DOM.');
  }

  return header;

}


export default Nav;