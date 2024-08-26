const viewApi = () => {
    const viewApiKey = document.createElement("body");
    viewApiKey.setAttribute("class", "body");
  
    viewApiKey.innerHTML = `<body>

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
              <li>About us</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Contact</li>
          </ul>
      </nav>
  </header>

<!-- Desktop Banner -->

  <main>
    <section class="section-api-key">
        <h1 class="title-api-key">Apikey</h1>
        <p class="description-api-key">Please enter your API key to connect to the AI ​​API.</p>
        <input class="description-input">
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

  </footer>

  <script src="main.js" type="module"></script>
  <script src="https://www.gstatic.com/charts/loader.js"></script>

  </body>`;
  
    return viewApiKey;
  
};

export default viewApi;