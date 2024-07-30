export const getApiKey = () => {
  //  obtener la API KEY 
  return localStorage.getItem("API KEY")
};

export const setApiKey = (key) => {
  //  guardar la API KEY 
  return localStorage.setItem("API KEY", key)
};
