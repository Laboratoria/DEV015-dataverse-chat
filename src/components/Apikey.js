import { getApiKey, setApiKey } from "../lib/apiKey.js";
import { navigateTo } from "../router.js";

export const Apikey = () => {
  // Retornamos el HTML de la sección para la API Key
  const contentApi = `
    <section class="section-api-key">
      <h1 class="title-api-key">Patitas</h1>
      <p class="description-api-key" >Connect with your future pet. Learn their story and find your perfect companion. Enter your API KEY and discover so much more about the world of pet adoption.</p>
      <input id="apiKey-input" type="password" class="input-api-key" placeholder="Ingresa tu API KEY" required>
      <div class="container-button">
      <button class="delete-apiKey">Delete</button>
      <button class="save-apiKey">Save</button>
      </div>
       <button class="return-beginning">Return</button>
    </section>
  `;

  // Insertamos el HTML en el contenedor principal
  const apiContainer = document.createElement('div');
  apiContainer.className = "div-apikey-container"
  apiContainer.innerHTML = contentApi;
  //document.body.appendChild(apiContainer); // Asegúrate de añadir esto al contenedor correcto en tu aplicación

  // Seleccionamos los elementos necesarios
  const saveButton = apiContainer.querySelector(".save-apiKey");
  const deleteButton = apiContainer.querySelector(".delete-apiKey");
  const returnButton = apiContainer.querySelector(".return-beginning");
  const inputApi = apiContainer.querySelector("#apiKey-input");


  let APIKEY;
  // Obtener la API key guardada
  // eslint-disable-next-line prefer-const
  APIKEY = getApiKey();
  
  if (APIKEY) {
    inputApi.value = APIKEY; // Si existe una API key guardada, la mostramos en el input
  }

  // Agregamos el evento al botón para guardar la API key
  saveButton.addEventListener("click", () => {
    APIKEY = inputApi.value;
    // Validamos la API key antes de guardarla
    if (validateApiKey(APIKEY)) {
      setApiKey(APIKEY); // Guardamos la API key usando la función setApiKey
      inputApi.value = "";
      alertSave(); // Mostramos la alerta al usuario
    } else {
      alert("API Key no válida. Asegúrate de que empiece con 'sk-' y tenga la longitud correcta.");
    }
  });

  // Función para validar el formato de la API key
  function validateApiKey(key) {
    const regex = /^sk-proj-[a-zA-Z0-9]{32,}$/; // Ejemplo de validación: empieza con 'sk-' seguido de letras y números
    return regex.test(key);
  }

  // Función para guardar la API key y mostrar una alerta
  function alertSave() {
    alert("Se ha guardado la API Key.");
  }

  // Agregamos el evento al botón para eliminar la API key
  deleteButton.addEventListener("click", () => {
    localStorage.removeItem("APIKEY");
    inputApi.value = "";
    alertDelete(); // Mostramos la alerta al usuario
  });

  function alertDelete() {
    alert("¡API key borrada con éxito!");
  }

  // Agregamos el evento al botón para eliminar la API key
  returnButton.addEventListener("click", () => {
    navigateTo("/");
  });

  return apiContainer;
};

export default Apikey;
