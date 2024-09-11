
const notFound = () => {
  // Crear un contenedor raíz en lugar de 'body'
  const viewContainer = document.createElement("div");
  viewContainer.setAttribute("class", "body");
 
  // Crear el main con la sección de la API Key
  const main = document.createElement("main");
  main.innerHTML = `
       <h1>pagina de error</h1>
   `;
 
  // Agregar el 'main' al contenedor principal
  viewContainer.appendChild(main);
 
  // Retornar el contenedor con todos los elementos
  return viewContainer;
};

export default notFound;