export const getApiKey = () => {
    // obtener la API KEY desde Local Storage
    try {
        return localStorage.getItem('apiKey');
    } catch (error) {
        console.error('Error al obtener la API KEY:', error);
        return null;
    }
 };
 
 export const setApiKey = (key) => {
   //guardar la API KEY en Local Storage
   try {
        localStorage.setItem('apiKey', key);
    } catch (error) {
        console.error('Error al guardar la API KEY:', error);
    }
 };