import { setRootEl, setRoutes, renderView, navigateTo } from "../src/router";

describe('router', () =>{

  //SET ROOTEL------------------------------------------
  describe('setRootEl', () =>{

    it('Assign and return the HTML root element', ()=>{
      const elementDom = document.createElement('div')
      const element = setRootEl(elementDom);
      expect(element).toEqual(elementDom);
    } ) 
  })

  // RENDER VIEW-------------------------------

  describe('renderView', () =>{
    it('renders error view when URL does not exist', ()=>{
        
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

// NAVIGATE TO------------------------------------

describe('navigateTo', () => {
  it('render the correct view based on location and pathname', ()=>{
    const routes = {
      "/api-kei": () => document.createElement('a'),
      "/panel": () => document.createElement('p'),      
    }
    setRoutes(routes);
    const elementDom = document.createElement('div');
    setRootEl(elementDom);
    navigateTo('/panel');
  
    expect(elementDom.querySelector('p')).toBeTruthy()
  })
})

describe('navigateTo', () => {
  it('prueba con props', ()=>{
    const routes = {
      "/api-kei": () => document.createElement('a'),
      "/chat": () => document.createElement('p'),      
    }
    setRoutes(routes);
    const elementDom = document.createElement('div');
    setRootEl(elementDom);
    const props = 'peter_parker_002';
    navigateTo('/chat', props);
  
    expect(elementDom.querySelector('p')).toBeTruthy()
  })
})

//ON URL CHANGE--------------------------------------------

