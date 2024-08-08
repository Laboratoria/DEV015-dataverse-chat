const Home = () => {
    const el = document.createElement("h1");
    el.innerHTML = "Dreamland";
   return el;
 }

 //funcion para crear tarjetas
 const renderItems = (data) => {
    const ulElement = document.createElement('ul');
    data.forEach(pelicula => 

    ulElement.appenChild(Card("ulPelis"))
    );
    return ulElement;
 };