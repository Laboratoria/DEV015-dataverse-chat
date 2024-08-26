import petsData from '../data/dataset.js';

export const home = () => {
    const body = document.createElement("body");
    body.setAttribute("class", "body");
  
    body.innerHTML = `
  
  <header>

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
            <h1>Patitas</h1>
          </ul>
          <ul class="navbar-options">
              <li>Adoptions</li>
              <li class="about-us">About us</li>
              <li class="individual-chat">FAQ</li>
              <li>Blog</li>
              <li>Contact</li>
          </ul>
      </nav>
  </header>

<!-- Desktop Banner -->

  <main>
    <section class="banner">
      <div class="izquierda">
      </div>
      <div class="derecha">
          <div class="texto">
              <h1>Get your family a new member</h1>
              <p>Open your doors and hearts to pets in need of
                a home and it will be thankful to you for the rest
                of their lives.</p>
              <button id="conocelos-btn">Explore more</button>
          </div>
      </div>

    </section>
<!-- Desktop Tarjetas -->

    <section class="mascotas-container" id="tarjetas-section">        
      <section class="mascotas-tarjetas">
       
        <h2 class="nuestras-mascotas">
          <span>Our pets</span>
          <p>Simply dummy text of the printing and typesetting industry.</p>
          <p class="numeroAdoptados"></p>
        </h2>

        <div class="mascotas-barra">
          <ul class="opciones-mascota">
            <li class="boton-filtros"><i class="fa-solid fa-bars" id="bars-2"></i>Filtros</li>
              <label id="orden"> Ordenar por:
                  <input id="asc" type="radio" name="sort-order" value="asc" data-testid="select-sort"><i class="fa-solid fa-arrow-down-a-z" style="color: #ff7a00;"></i>
                  <input id="desc" type="radio" name="sort-order" value="desc" data-testid="select-sort"><i class="fa-solid fa-arrow-up-a-z" style="color: #ff7a00;"></i>
              </label>
              <button id="btn-estadísticas">Estadísticas</button>
          </ul>
        </div>
        <div class="estadisticas-section">
          <div class="btn-close2">
            <li><i class="fa-solid fa-xmark"></i></li>
            <p class="adoptados"></p>
            <div class="graphics"></div>
          </div>
          </div>
        <div class="mascotas-filtros">
          <label for="tipo"></label>
            <select id="tipo" name="elegir" data-testid="select-filter">
              <option value="Tipo" disabled selected hidden>Tipo</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
            </select>
  
            <label for="edad"></label>
            <select id="edad" name="elegir">
              <option value="Edad" disabled selected hidden>Edad</option>
              <option value="Cachorro">Cachorro</option>
              <option value="Adulto">Adulto</option>
              <option value="Mayor">Mayor</option>
            </select>
  
            <label for="genero"></label>
            <select id="genero" name="elegir">
              <option value="Genero" disabled selected hidden>Género</option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
  
            <label for="tamaño"></label>
            <select id="tamaño" name="elegir">
              <option value="Tamaño" disabled selected hidden>Tamaño</option>
              <option value="Pequeño">Pequeño</option>
              <option value="Mediano">Mediano</option>
              <option value="Grande">Grande</option>
            </select>
  
            <div>
            <button id="btn-limpiar" data-testid="button-clear">Limpiar</button>
            </div>
          </div>
        <div id="pets-container">

        </div>
      </section>

      

    </section>

  </main>

  <footer class="footer">
    <div class="column">
      <a href="#">Adoptions</a>
      <a href="#">About us</a>
      <a href="#">FAQ</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>

    </div>
    <div class="center-column">
      <h4>Salva una vida</h4>
      <h2>Patitas</h2>
      <a class="name">Ana Soto 2024</a>
    </div>
    <div class="column">
      <div class="icon">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
      </div>
    </div>

  </footer>`;


  const ul = document.createElement("ul");
  ul.className = "ul-tarjeta";

  petsData.forEach((pet) => {
    const petItem = document.createElement("li");
    petItem.className = "tarjeta";
    petItem.setAttribute('itemscope','');
    petItem.setAttribute('itemtype','http://schema.org/Pet');

    // Convertir la edad a meses
    const { years, months } = pet.facts.age;
    const totalMonths = (years * 12) + months;

    let ageDisplay;
    if (totalMonths < 12) {
      ageDisplay = `${months} mes(es)`;
    } else {
      ageDisplay = `${years} año(s)`;
    }


    // Usar la función para obtener el HTML
    petItem.innerHTML = `
                          <div itemprop="tarjeta-img">
                            <img class="tarjeta-img" src="${pet.imageUrl}" alt="${pet.name}">
                          </div>
                          <div itemprop="name">${pet.name}</div>
                          <div itemprop="description">${pet.shortDescription}</div>
                          <div itemprop="age"><strong>Edad:</strong> ${ageDisplay}</div>
                          <div itemprop="gender"><strong>Género:</strong> ${pet.facts.gender}</div>
                          <div itemprop="breed"><strong>Raza:</strong> ${pet.facts.breed}</div>
                          <div itemprop="size"><strong>Tamaño:</strong> ${pet.facts.size}</div>
                          <div itemprop="temperament"><strong>Comportamiento:</strong> ${pet.facts.temperament}</div>
                        </ul>
                      `;
    ul.appendChild(petItem);
  });

  const petsContainer = body.querySelector('#pets-container');

  petsContainer.appendChild(ul);

  return body;
  
};




export default home;