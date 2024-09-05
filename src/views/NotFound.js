
const notFound = () => {
  const viewApiKey = document.createElement("body");
  viewApiKey.setAttribute("class", "body");


  // Crear el main con la sección de la API Key
  const main = document.createElement("main");
  main.innerHTML = `
    <section class="banner">
              <h1>Get your family a new member</h1>
    </section>
  `

  return viewApiKey;
};

export default notFound;