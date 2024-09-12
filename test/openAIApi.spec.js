import { communicateWithOpenAI } from "../src/lib/openAIApi.js";
window.fetch = jest.fn(); // Mock de la función window.fetch
describe("communicateWithOpenAI", () => {
  beforeEach(() => {
    window.fetch.mockClear(); // Reinicia el mock antes de cada test
  }); //it es una función que define un caso de prueba. Es equivalente a test
  it("debe entregar la respuesta de OpenAI cuando la petición sería exitosa", async () => {
    const respuesta = "respuesta";
    const mockResponse = { choices: [{ message: { content: respuesta } }] };
    jest
      .spyOn(window.localStorage.__proto__, "getItem")
      .mockReturnValueOnce("ApiKey");

    window.fetch.mockResolvedValueOnce({
      // Simula la respuesta de window.fetch con éxito
      ok: true, //indica que la respuesta HTTP tuvo exito (200-299).
      json: jest.fn().mockResolvedValueOnce(mockResponse), //mockResolvedValueOnce(mockResponse): Simula que la llamada al método
    }); // json: jest.fn(): convierte la respuesta en un json
    const content = [{ role: "user", content: "Hola, IA" }];
    const result = await communicateWithOpenAI(content);
    expect(window.fetch).toHaveBeenCalledTimes(1); // Asegúrate de que window.fetch fue llamado una vez
    expect(result).toEqual(respuesta); // Verifica que la respuesta sea la esperada
  }); // Verifica que la respuesta sea la esperada
  it("debe manejar errores cuando la API key no está presente", async () => {
    const mockGetApiKey = jest
      .spyOn(window.localStorage.__proto__, "getItem")
      .mockReturnValueOnce(null); // Simula que no hay API Key
    const content = [{ role: "user", content: "Hola, IA" }];
    const result = await communicateWithOpenAI(content);
    expect(result).toBeNull(); // Verifica que el resultado sea nulo debido a la falta de API key
    mockGetApiKey.mockRestore(); // Limpia el mock de la API key
  });
  it("debe manejar errores cuando la respuesta de la API falla", async () => {
    // Simula una respuesta fallida de la API
    jest
      .spyOn(window.localStorage.__proto__, "getItem")
      .mockReturnValueOnce("ApiKey");
    window.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Error de servidor",
      json: jest
        .fn()
        .mockResolvedValueOnce({ choices: [{ text: "respuesta" }] }),
    });

    const content = [{ role: "user", content: "Hola, IA" }];
    const result = await communicateWithOpenAI(content);
    expect(result).toBeNull(); // Verifica que el resultado sea nulo debido al error en la API
  });
});
