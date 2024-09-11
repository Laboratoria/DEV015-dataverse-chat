// test/apiKey.spec.js

import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    // Establecemos un valor para la API Key
    const mockApiKey = "12345-ABCDE";
    setApiKey(mockApiKey);

    // Comprobamos que getApiKey devuelva el valor correcto
    const result = getApiKey();
    expect(result).toBe(mockApiKey);
  });

  it("debería devolver undefined si la API Key no ha sido establecida", () => {
    // Comprobamos que getApiKey devuelva undefined cuando no se ha establecido ninguna API Key
    const result = getApiKey();
    expect(result).toBeUndefined();
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    const mockApiKey = "67890-FGHIJ";
    // Establecemos un valor para la API Key
    setApiKey(mockApiKey);

    // Comprobamos que getApiKey devuelva el valor establecido
    const result = getApiKey();
    expect(result).toBe(mockApiKey);
  });
});
