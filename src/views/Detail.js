//debe mostrar el detalle de las mujeres
const Detail = () => {
    const view = document.createElement('div');
    view.innerHTML = `
      <h1>Vista detallada de X mujer</h1>
      <p>Texto</p>
      <a href="/">Link a Home</a>
    `;
    return view;
  };
  
export default Detail;