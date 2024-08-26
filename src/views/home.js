//import { CharacterList } from "../components/CharacterList.js";
import ordenado from "../components/ordenado.js";
import filtrado from "../components/filtrado.js";
import boton from "../components/boton.js";
import renderHeader  from "../components/Renderheader.js"
import personajes from "../components/personajes.js";

function home() {

  const divHome = document.createElement('div');  
  divHome.appendChild (renderHeader());

  const viewElHome = document.createElement('div');
  divHome.appendChild (viewElHome);

  const divOrdenado = document.createElement('div');  
  divOrdenado.appendChild (ordenado());
  divHome.appendChild(divOrdenado);

  const divFiltrado = document.createElement('div');
  divFiltrado.appendChild(filtrado());
  divHome.appendChild(divFiltrado);

  const divBoton = document.createElement('div');
  divBoton.appendChild(boton());
  divHome.appendChild(divBoton);

  const divpersonajes = document.createElement('div');
  divBoton.appendChild(personajes());
  divHome.appendChild(divpersonajes);

  //const divCharacterList = document.createElement('div');
  //divCharacterList.appendChild(CharacterList());
  //divHome.appendChild(divCharacterList);

  return divHome;
}
export default home 