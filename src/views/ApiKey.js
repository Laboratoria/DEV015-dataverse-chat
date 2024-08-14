//Crea un nuevo elemento div,le asigna texto como su contenido
// y devuelve ese div para que se pueda utilizar en otras partes
export function ApiKey(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = '¡Este es el Api Key!';
  return viewEl;
}
