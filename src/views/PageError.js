export function ErrorPage() { // exportamos la función ErrorPage que devuelve un elemento HTML
  const viewEl = document.createElement('div');  // Creamos un contenedor para la vista de error
  viewEl.innerHTML = '<h1>Error 404</h1><p>¡Página no encontrada!</p>'; // Establecemos el contenido de la vista
  return viewEl; // Retornamos el elemento creado
}


