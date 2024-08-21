const Error = () => {
    const view = document.createElement('div');
    view.innerHTML = `
      <h1>Ops.. esto es incomodo pero no encontre la pagina solicitada</h1>
    `;
    return view;
  };
  
export default Error;