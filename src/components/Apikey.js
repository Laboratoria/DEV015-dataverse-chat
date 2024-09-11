import { getApiKey, setApiKey } from "../lib/apiKey.js";

export const Apikey = () => {
  // Retornamos el HTML de la sección para la API Key
  const contentApi = `
    <section class="section-api-key">
      <h1 class="title-api-key">API Key</h1>
      <p class="description-api-key">Please enter your API key to connect to the AI.</p>
      <input id="apiKey-input" class="input-api-key" placeholder="Enter your API key">
      <button class="save-apiKey">Save API Key</button>
    </section>
  `;

  // Insertamos el HTML en el contenedor principal
  const apiContainer = document.createElement('div');
  apiContainer.innerHTML = contentApi;
  //document.body.appendChild(apiContainer); // Asegúrate de añadir esto al contenedor correcto en tu aplicación

  // Seleccionamos los elementos necesarios
  const saveButton = apiContainer.querySelector(".save-apiKey");
  const inputApi = apiContainer.querySelector("#apiKey-input");

  // Obtenemos la API key guardada previamente
  let key = getApiKey();
  if (key) {
    inputApi.value = key; // Si existe una API key guardada, la mostramos en el input
  }

  // Función para guardar la API key y mostrar una alerta
  function alertSave() {
    alert("Se ha guardado la API Key.");
  }

  // Agregamos el evento al botón para guardar la API key
  saveButton.addEventListener("click", () => {
    key = inputApi.value;
    setApiKey(key); // Guardamos la API key usando la función setApiKey
    alertSave(); // Mostramos la alerta al usuario
  });

  return apiContainer;
};

export default Apikey;
