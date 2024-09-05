# Dataverse Chat

Historia de Usuaria: Explorar Conjuntos de Datos
Descripción:
Como investigadora de datos, quiero explorar conjuntos de datos dentro de Dataverse Chat, para identificar patrones y extraer insights relevantes.

Definición de Terminado:

La investigadora puede visualizar una lista de conjuntos de datos disponibles.
La investigadora puede filtrar y ordenar conjuntos de datos por diferentes criterios como fecha, popularidad, tamaño, y autor.
La investigadora puede abrir un conjunto de datos y ver una descripción general, detalles sobre el origen del dato, y un preview de los datos.
La investigadora puede realizar búsquedas dentro de los datos del conjunto seleccionado.
La interfaz es intuitiva, rápida y está libre de errores.
Criterios de Aceptación:

Visualización de Conjuntos de Datos: Al acceder a la sección de conjuntos de datos, la investigadora puede ver una lista con todos los conjuntos disponibles.
Filtros y Ordenación: La investigadora puede aplicar filtros por fecha, popularidad, tamaño y autor, y puede ordenar la lista según estos criterios.
Detalles del Conjunto de Datos: Al hacer clic en un conjunto de datos, la investigadora puede ver una vista detallada que incluye: descripción, origen del dato, número de registros, columnas, y un preview de los datos.
Búsqueda dentro del Conjunto: La investigadora puede buscar palabras clave dentro de los datos del conjunto seleccionado y ver los resultados destacados.
Interfaz de Usuario: La investigadora encuentra la interfaz fácil de usar, sin errores visibles y con tiempos de respuesta aceptables (<2 segundos para cargar un conjunto de datos).
Historia de Usuaria: Comparar Conjuntos de Datos
Descripción:
Como analista de datos, quiero comparar dos o más conjuntos de datos para identificar similitudes y diferencias clave.

Definición de Terminado:

El analista puede seleccionar múltiples conjuntos de datos para compararlos.
El analista puede ver una vista comparativa que muestra similitudes y diferencias entre los conjuntos de datos.
El analista puede exportar los resultados de la comparación en un formato legible (ej. CSV o PDF).
La comparación es precisa, sin errores, y visualmente clara.
Criterios de Aceptación:

Selección de Conjuntos de Datos: El analista puede seleccionar dos o más conjuntos de datos desde una lista o buscador.
Vista Comparativa: Al comparar, el analista ve una vista clara que destaca tanto similitudes como diferencias en las estructuras y valores de los conjuntos de datos.
Exportación de Resultados: El analista puede exportar la comparación en formato CSV o PDF, manteniendo la estructura visual de la comparación.
Precisión y Claridad: La comparación es precisa (sin errores de datos) y está presentada de manera que el analista pueda entender fácilmente los puntos clave.
Historia de Usuaria: Colaborar en Análisis de Datos
Descripción:
Como científica de datos, quiero compartir y colaborar en tiempo real con otros miembros de mi equipo dentro de Dataverse Chat, para trabajar conjuntamente en el análisis de conjuntos de datos.

Definición de Terminado:

La científica puede invitar a otros usuarios a colaborar en un conjunto de datos específico.
Los usuarios invitados pueden ver y editar el conjunto de datos en tiempo real.
La científica puede comunicarse a través de un chat en tiempo real con otros colaboradores.
Los cambios se guardan automáticamente y se puede ver un historial de modificaciones.
Criterios de Aceptación:

Invitación a Colaborar: La científica puede invitar a uno o más usuarios a unirse a la sesión de trabajo en un conjunto de datos específico.
Edición en Tiempo Real: Los colaboradores pueden hacer modificaciones al conjunto de datos, y los cambios son visibles en tiempo real para todos los usuarios.
Comunicación en Tiempo Real: Existe un chat integrado que permite a los usuarios comunicarse mientras trabajan en el conjunto de datos.
Historial de Cambios: Los cambios realizados en el conjunto de datos se guardan automáticamente y se puede acceder a un historial para ver quién hizo qué modificaciones y cuándo.


![Prototipo de alta fidelidad](images/prototipo.jpg)

Test de usabilidad:
Para llevar a cabo los test de usabilidad en mi proyecto Dataverse Chat, seguí un enfoque iterativo, recopilando retroalimentación directa de las usuarias objetivo en varias etapas del desarrollo. A continuación, detallo los problemas de usabilidad que detecté durante los test y las mejoras que implementé en la propuesta final:

1. Problema: Dificultad para navegar entre conjuntos de datos
Observación: Las usuarias expresaron que la interfaz para explorar y navegar entre los conjuntos de datos no era intuitiva. La disposición de los filtros y la opción de ordenación no estaba clara, lo que dificultaba encontrar rápidamente los conjuntos de datos relevantes.

Mejora:

Rediseño de la Barra de Navegación: Simplifiqué la barra de navegación y la estructura de filtros, ubicando los filtros más utilizados (fecha, popularidad, tamaño) en una barra lateral fija. También añadí un botón de "Ordenar por" más visible y de fácil acceso.
Incorporación de una Función de Búsqueda Predictiva: Añadí una barra de búsqueda predictiva que sugiere conjuntos de datos a medida que se escribe, para acelerar el proceso de encontrar lo necesario.
2. Problema: Comparación de conjuntos de datos confusa
Observación: Al intentar comparar conjuntos de datos, las usuarias encontraron que la vista comparativa no destacaba suficientemente las diferencias y similitudes importantes. La presentación de los datos comparados resultaba abrumadora.

Mejora:

Mejora en la Visualización: Rediseñé la vista comparativa para que utilizara colores y gráficos que destacaran claramente las diferencias y similitudes entre los conjuntos de datos. También agregué opciones para personalizar qué columnas o variables comparar.
Resúmenes Visuales: Incluí un resumen visual en la parte superior de la vista comparativa, que brinda un vistazo rápido a los puntos clave de la comparación, como gráficos de barras o de dispersión.
3. Problema: Colaboración en tiempo real poco fluida
Observación: Las usuarias informaron que la función de colaboración en tiempo real era lenta y poco responsiva, lo que afectaba la experiencia de trabajo conjunto. Además, el chat integrado se percibía como básico y faltaban opciones para discutir puntos específicos de los datos.

Mejora:

Optimización de la Sincronización en Tiempo Real: Mejoré el backend para que los cambios se sincronizaran más rápidamente entre los colaboradores, reduciendo el tiempo de respuesta a menos de 1 segundo.
Chat Mejorado: Añadí características al chat, como la capacidad de comentar directamente sobre una celda específica del conjunto de datos, etiquetar a otros usuarios, y crear hilos de conversación para diferentes temas de discusión.
4. Problema: Curva de aprendizaje alta para nuevas usuarias
Observación: Las usuarias menos experimentadas encontraron que la interfaz tenía una curva de aprendizaje elevada, especialmente para aquellas que no estaban familiarizadas con la terminología técnica.

Mejora:

Tutoriales Interactivos: Implementé un tutorial interactivo para nuevas usuarias que las guía a través de las funciones básicas del sistema en su primera sesión.
Tooltips y Documentación: Agregué tooltips detallados sobre los elementos de la interfaz y un enlace rápido a una guía de usuario más completa para explicar términos técnicos y funciones avanzadas.
5. Problema: Exportación de resultados poco personalizable
Observación: Las usuarias expresaron que las opciones de exportación eran limitadas y que la información exportada no siempre se presentaba de la manera que necesitaban para sus análisis externos.

Mejora:

Exportación Personalizable: Añadí la capacidad de personalizar qué datos incluir en las exportaciones, el formato de salida (CSV, PDF, Excel), y la opción de incluir gráficos y resúmenes generados en la plataforma.
Previsualización de Exportación: Implementé una función de previsualización para que las usuarias pudieran ver cómo se verían los datos exportados antes de confirmar la exportación.
Conclusión
Cada una de estas mejoras fue implementada en función de la retroalimentación obtenida durante los test de usabilidad, y contribuyó a hacer de Dataverse Chat una herramienta más accesible, eficiente y útil para las usuarias. El proceso iterativo permitió refinar la interfaz y las funcionalidades, asegurando que el producto final respondiera mejor a las necesidades reales de las usuarias.
