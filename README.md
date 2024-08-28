## Resumen del Proyecto

Este proyecto convierte una aplicación desarrollada en Dataverse en una Single Page Application (SPA), añadiendo funcionalidades como una vista detallada para cada personaje y un sistema de chat interactivo utilizando la API de OpenAI.

![Preview app](imagenes/Captura de Pantalla 2024-08-25 a la(s) 18.51.19.png)

## Objetivos del Proyecto
Desarrollar una SPA con navegación fluida.
Aplicar conceptos de diseño responsivo.
Implementar un router para la navegación entre vistas.
Integrar la API de OpenAI para chat interactivo.
Manejar la asincronía en JavaScript y crear pruebas unitarias para código asíncrono.
# Estructura del Proyecto
* src/components: Componentes reutilizables de la interfaz de usuario.
* src/data: Datos de ejemplo o generados por IA.
* src/lib: Funcionalidades no relacionadas al DOM, como filtros, ordenaciones y funciones para la API de IA.
* src/views: Archivos para las diferentes vistas de la aplicación.
* src/index.html: Archivo HTML principal con <div id='root'></div>.
* src/index.js: Punto de partida para la SPA.
* src/router.js: Archivo para manejar el enrutamiento (deberás crearlo).
* src/style.css: Archivo para estilos personalizados (deberás crearlo).
* src/test: Tests para funciones y componentes, incluyendo dataFunctions.
## Criterios de Aceptación Mínimos
* Definición del Producto: Documenta el proceso de diseño y cómo el producto resuelve los problemas de las usuarias en el README.md.
* Historias de Usuaria: Crea Historias de Usuaria que representen las necesidades de las usuarias, incluyendo definición de terminado y Criterios de Aceptación para cada historia.
## Diseño de la Interfaz de Usuaria:
![Preview app](imagenes/Captura de Pantalla 2024-08-25 a la(s) 19.03.12.png)

* * Prototipo de Baja Fidelidad: Bocetos iniciales, subidos al repositorio y mencionados en el README.md.
* * Prototipo de Alta Fidelidad: Diseño visual en herramientas como Figma, representando el ideal de la solución.
* * Testeos de Usabilidad: Realiza pruebas de usabilidad y documenta problemas detectados y mejoras realizadas.
* * Implementación de la Interfaz de Usuaria: Implementa la interfaz en HTML/CSS/JS, priorizando las funcionalidades clave.
* * Pruebas Unitarias: Escribe pruebas unitarias con cobertura del 70% para funciones de procesamiento de datos usando Jest.
## Objetivos de Aprendizaje
* HTML: Uso de HTML semántico.
* CSS: Uso de selectores, modelo de caja, flexbox, y CSS Grid Layout.
* Web APIs: Ruteado, almacenamiento en navegador, Fetch API.
* DOM: Selectores, manejo de eventos, manipulación dinámica.
* JavaScript: Identificadores descriptivos, variables, funciones, condicionales, bucles, asincronía (callbacks, promesas), tipos de datos, módulos ES6.
* Testing en JavaScript: Pruebas unitarias y asíncronas, uso de mocks y espías.
* HTTP: Cabeceras, peticiones y respuestas, códigos de status.
* AI Prompting: OpenAI API.
* Control de Versiones (Git y GitHub): Instalación, configuración, control de versiones, integración de cambios, despliegue con GitHub Pages.
* Centrado en el Usuario: Diseño centrado en el usuario y prototipos de alta fidelidad.
* Investigación: Testeos de usabilidad de prototipos en distintos niveles de fidelidad.
