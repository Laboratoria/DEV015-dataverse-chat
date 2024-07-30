export function createHeader () {
  const header = document.createElement('header');
  header.className = 'header';


  const imageHeader = document.createElement('img')
  imageHeader.setAttribute("src", '../img/IMAGEN HEADER.png');
  imageHeader.className = 'imageHeader';

  const titleHeader = document.createElement('h1');
  titleHeader.innerHTML = 'Game Time';

  header.appendChild(imageHeader);
  header.appendChild(titleHeader);
  
  return header;
}