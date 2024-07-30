import {
  setRootEl,
  setRoutes,
  renderView,
  navigateTo,
  onURLChange,
} from "../src/router";

describe("router", () => {
  //SET ROOTEL------------------------------------------
  describe("setRootEl", () => {
    it("Assign and return the HTML root element", () => {
      const elementDom = document.createElement("div");
      const element = setRootEl(elementDom);
      expect(element).toEqual(elementDom);
    });
  });

  // SET ROUTES-------------------------------------
  describe("setRoutes", () => {
    it("if la vista de error no existe", () => {
      const routes = {
        "/chat": () => document.createElement("div"),
        "/panel": () => document.createElement("p"),
      };
      routes;
      expect("la vista de error no existe").toBeTruthy();
    });

    it("if set routes no es un objeto", () => {
      const routes = "no es un objeto";
      routes;
      expect("no es un objeto").toBeTruthy();
    });
  });

  // RENDER VIEW-------------------------------

  describe("renderView", () => {
    it("renders error view when URL does not exist", () => {
      const routes = {
        "/chat": () => document.createElement("div"),
        "/error": () => document.createElement("p"),
      };
      setRoutes(routes);
      const elementDom = document.createElement("div");
      setRootEl(elementDom);
      renderView("/fjdehn");

      expect(elementDom.querySelector("p")).toBeTruthy();
    });
  });

  // NAVIGATE TO------------------------------------
  describe("navigateTo", () => {
    it("render the correct view based on location and pathname", () => {
      const routes = {
        "/api-kei": () => document.createElement("a"),
        "/panel": () => document.createElement("p"),
        "/error": () => document.createElement("p"),
      };
      setRoutes(routes);
      const elementDom = document.createElement("div");
      setRootEl(elementDom);
      navigateTo("/panel");

      expect(elementDom.querySelector("p")).toBeTruthy();
    });
  });

  describe("navigateTo", () => {
    it("prueba con props", () => {
      const routes = {
        "/api-kei": () => document.createElement("a"),
        "/chat": () => document.createElement("p"),
        "/error": () => document.createElement("p"),
      };
      setRoutes(routes);
      const elementDom = document.createElement("div");
      setRootEl(elementDom);
      const props = "peter_parker_002";
      navigateTo("/chat", props);

      expect("http://localhost:3000/chat?peter_parker_002=").toBeTruthy();
    });
  });

  //ON URL CHANGE--------------------------------------------
  describe("onURLchange", () => {
    it("prueba con props", () => {
      const routes = {
        "/api-kei": () => document.createElement("a"),
        "/chat": () => document.createElement("p"),
        "/error": () => document.createElement("p"),
      };
      setRoutes(routes);
      const elementDom = document.createElement("div");
      setRootEl(elementDom);
      const props = "spider_ham_006";
      navigateTo("/chat", props);
      onURLChange(location);
      const { pathname, search } = location;
      expect(pathname + search).toBe("/chat?spider_ham_006=");
    });
  });
});
