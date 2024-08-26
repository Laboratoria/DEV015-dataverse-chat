import renderHeader  from "../components/Renderheader.js"

export function PageError() { 
  const divHome = document.createElement('div');  
  divHome.appendChild (renderHeader());
  // exportamos la función ErrorPage que devuelve un elemento HTML
  const viewEl = document.createElement('div');  // Creamos un contenedor para la vista de error
  viewEl.innerHTML = `
  <h1>Error 404</h1><p>¡Oh pero que despiste! hasta los aventureros más experimentados pierden la senda a seguir.</p>
`;

  divHome.appendChild(viewEl)

  return divHome

}
export default PageError;