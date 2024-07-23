import { setRootEl, setRoutes, renderView } from "../src/router";

describe('router', () =>{

  describe('setRootEl', () =>{

    it('asigna y devuelve el elemento root del html', ()=>{
      const elementDom = document.createElement('div')
      const element = setRootEl(elementDom);
      expect(element).toEqual(elementDom);
    } ) 
  })

  describe('renderView', () =>{
    it('renderiza la vista de error cuando la URL no existe', ()=>{
        
      const routes = {
        "/chat": () => document.createElement('div'),
        "/error": () => document.createElement('p'),      
      }
      setRoutes(routes);
      const elementDom = document.createElement('div');
      setRootEl(elementDom);
      renderView('/fjdehn');

      expect(elementDom.querySelector('p')).toBeTruthy()


    })
  })
} )