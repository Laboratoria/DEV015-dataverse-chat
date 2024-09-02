export const Footer = () => {

  const footer = document.createElement('footer');
  footer.innerHTML = `

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

    `;

  return footer;
}
  
export default Footer;