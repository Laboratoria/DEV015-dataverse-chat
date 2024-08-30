const renderFooter = () => { 
  const footerEl = document.createElement('footer');
  footerEl.classList.add('piepagina'); // Aplicar la clase al footer
  footerEl.innerHTML = `
      <p>DEVC 15 </p>
      <p>Lisette Piña - Mayerling Hernandez</p>
      <p>Laboratoria</p>
    `;
  return footerEl;
}
export default renderFooter;
