// test/apiKey.spec.js
/*import { getApiKey, setApiKey } from "../src/lib/apiKey";

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    // Desarrolla el test correspondiente aquí
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    // Desarrolla el test correspondiente aquí
  });
});
*/
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key almacenada', () => {
    const testKey = '12345';
    localStorage.setItem('apiKey', testKey); // Simula el almacenamiento previo de la API Key

    const result = getApiKey();
    expect(result).toBe(testKey); // Comprueba que la función devuelve la API Key almacenada
  });

  it('debería devolver null si no hay una API Key almacenada', () => {
    localStorage.removeItem('apiKey'); // Asegúrate de que no haya ninguna API Key almacenada

    const result = getApiKey();
    expect(result).toBeNull(); // Comprueba que la función devuelve null si no hay API Key
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    const testKey = '67890';

    setApiKey(testKey); // Guarda la API Key
    const storedKey = localStorage.getItem('apiKey'); // Recupera la API Key desde Local Storage

    expect(storedKey).toBe(testKey); // Comprueba que la API Key almacenada es la misma que la establecida
  });
});