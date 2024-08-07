// aqui van las tarjetas
const Home = () => {
    const view = document.createElement('div');
    view.innerHTML = `
      <h1>Bienvenidos a la SPA de Científicas Notables</h1>
      <p>Selecciona una científica para saber más sobre ella.</p>
      <a href="/detail">Link a detail</a>
    `;
    return view;
  };
  
export default Home;
