export function PageError() { // exportamos la función ErrorPage que devuelve un elemento HTML
  const viewEl = document.createElement('div');  // Creamos un contenedor para la vista de error
  viewEl.innerHTML = `
  <h1>Error 404</h1><p>¡Página no encontrada!</p>
`
  return viewEl; 
}
export default PageError;