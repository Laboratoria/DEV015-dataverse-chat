export const createHeader = ()=> {

    const divInicio = document.createElement("div");

    const header = document.createElement('header');
    header.innerHTML = "<h1> Dreamland </h1>";

    const main = document.createElement("main");
    main.innerHTML= "<h2>¡Bienvenidos fans de Disney y Pixar! Explora nuestro mágico contenido y descubre las novedades de este fantástico mundo donde puedes chatear con tus películas favoritas</h2>";
   
    divInicio.appendChild(header);
    divInicio.appendChild(main);

    return divInicio;
};