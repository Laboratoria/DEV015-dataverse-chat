import data from '../../data/dataset.js'; //importa data

const Detail = (params) => {
    const cardData = data.filter((el)=>{ return el.id == params['id']; })[0];

    const view = document.createElement('div');
    view.innerHTML = `
      <h1>Vista detallada de X mujer:${cardData['name']}</h1>
      <p>Texto</p>
      <a href="/">Link a Home</a>
    `;
    return view;
  };
  
export default Detail;