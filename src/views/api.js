export const api = () => {
  const divApi = document.createElement("div");

  const apiKeyInput = document.createElement("input");
  apiKeyInput.id = "idInput";
  apiKeyInput.type = "password";
  apiKeyInput.placeholder = "ApiKey";
  apiKeyInput.classList.add("cuadroInput");

  const elementLabel = document.createElement("label");
  elementLabel.htmlFor = "idInput";
  elementLabel.textContent = "Agrega tu ApiKey: ";
  elementLabel.classList.add("cuadroLabel");

  const saveButton = document.createElement("button");
  saveButton.textContent = "Guardar";
  saveButton.classList.add("saveButton");
  saveButton.addEventListener("click", () => {
    const apiKey = apiKeyInput.value;
    localStorage.setItem("apiKey", apiKey);
    alert("ApiKey guardada exitosamente.");
  });

  divApi.appendChild(elementLabel);
  divApi.appendChild(apiKeyInput);
  divApi.appendChild(saveButton);
  return divApi;

  
};
