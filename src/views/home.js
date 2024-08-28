import ordenado from "../components/ordenado.js";
import filtrado from "../components/filtrado.js";
import boton from "../components/boton.js";
import renderHeader  from "../components/Renderheader.js"
import personajes from "../components/personajes.js";

function home() {

  const divHome = document.createElement('div');

  // Añadir el header a la página
  const header = renderHeader();
  divHome.appendChild(header);

  const navOrdenFiltroBoton = document.createElement('nav');  
  navOrdenFiltroBoton.appendChild (ordenado());
  divHome.appendChild(navOrdenFiltroBoton);

  
  navOrdenFiltroBoton.appendChild(filtrado());
  divHome.appendChild(navOrdenFiltroBoton);

 
  navOrdenFiltroBoton.appendChild(boton());
  divHome.appendChild(navOrdenFiltroBoton);

  const mainPersonajes = document.createElement('main');
  mainPersonajes.appendChild(personajes());// tenismos un divBoton por lo que nos metia los personajes en el div del boton
  divHome.appendChild(mainPersonajes);

  //const divCharacterList = document.createElement('div');
  //divCharacterList.appendChild(CharacterList());
  //divHome.appendChild(divCharacterList);

  return divHome;
}
export default home 