// export function createHeader() {
//   const headerContainer = document.getElementById('headerContainer');

//   const header = document.createElement('header');


// }

export function createHeader () {
  const header = document.createElement('header');
  const imageHeader = document.createElement('img')
  imageHeader.setAttribute("src", '../img/IMAGEN HEADER.png');
  imageHeader.className = 'imageHeader';
  const createHeader = document.createElement('h1');
  createHeader.innerHTML = 'Game Time';

  header.appendChild(imageHeader);
  header.appendChild(createHeader);
  return header;
}
/*
export const createHeader = () => {
  const header = document.createElement('header');
  const titulo = document.createElement('h1');
  titulo.textContent = 'Game Time';
  header.appendChild(titulo);
  console.log('Header created:', header); // Verificar que el header se crea correctamente
  return header;
};*/