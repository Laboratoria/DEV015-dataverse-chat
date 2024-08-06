import { setRoutes, ROUTES } from '../src/router.js';

describe('Router', () => {

  // Test para establecer rutas correctamente
  test('debería establecer rutas correctamente', () => {
    const routes = { 
      '/': () => 'Home', 
      '/chat-individual': () => 'ChatIndividual',
      '/error': () => 'ErrorView'
    };
    
    setRoutes(routes);

    // Verifica que las rutas se hayan asignado correctamente
    expect(ROUTES['/']).toBeDefined();
    expect(ROUTES['/chat-individual']).toBeDefined();
    expect(ROUTES['/error']).toBeDefined();
    expect(ROUTES['/']()).toBe('Home View');
    expect(ROUTES['/chat-individual']()).toBe('chatIndividual View');
  });
});
