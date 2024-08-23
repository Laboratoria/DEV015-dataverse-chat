const home = () => {
    const header = document.createElement("header");
    header.setAttribute("class", "header");
  
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
  
        <nav class="nav">
            <div class="menu-btn">
                <i class="fa-solid fa-bars"></i>
            </div>
            <ul>
              <h1>Pet</h1>
            </ul>
            <ul class="navbar-options">
                <li>Adoptions</li>
                <li>About us</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Contact</li>
              <li class="li-donations">Help here</li>
            </ul>
        </nav>`;
  
    return header;
  
};

export default home;