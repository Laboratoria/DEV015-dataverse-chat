import { setRoutes, ROUTES } from '../src/router.js';

describe('Router', () => {
  beforeAll(() => {
    setRoutes({
      '/': () => 'Home',
      '/chat-individual': () => 'Chat Individual',
      '/error': () => 'Error',
    });
  });

  it('Debería establecer rutas correctamente', () => {
    expect(ROUTES['/']).toBeDefined();
    expect(ROUTES['/chat-individual']).toBeDefined();
    expect(ROUTES['/error']).toBeDefined();

    expect(ROUTES['/']()).toBe('Home');
    expect(ROUTES['/chat-individual']()).toBe('Chat Individual');
    expect(ROUTES['/error']()).toBe('Error');
  });

});

