export function createFooter() {
  const footer = document.createElement('Footer');
  footer.className = 'footer';

  const namesFooter = document.createElement('p');
  namesFooter.innerHTML = 'Alejandra García | Victoria Montero';

  footer.appendChild(namesFooter);

  return footer;
}
