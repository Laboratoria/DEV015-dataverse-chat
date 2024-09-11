export const createFooter = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div= footer>
    <p>"Creado por Daniela Martínez. Proyecto Dataverse para Laboratoria. La información de esta página está proporcionado por Disney y Pixar, quienes tiene derechos exclusivos del contenido."</p>
    </div>
    `;
  return footer;
};
