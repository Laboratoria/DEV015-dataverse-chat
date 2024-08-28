export const getApiKey = () => {
// obtener la API KEY desde Local Storage
  try {
    const api_key = localStorage.getItem('apiKey');
    if (!api_key) {
      throw new Error('Api Key not defined!');
    }
    return localStorage.getItem('apiKey');
  } catch (error) {
    const api_key = prompt("Por favor ingresa una Open AI Key");
    if (api_key.length <= 160) {
      alert("Api Key invalida, por favor ingresa una Open AI api key");
      return getApiKey();
    }
    setApiKey(api_key);
    return null;
  }
};

export const setApiKey = (key) => {
  //guardar la API KEY en Local Storage
  try {
    localStorage.setItem('apiKey', key);
  } catch (error) {
    alert('Error al guardar la API KEY:', error);
  }
};