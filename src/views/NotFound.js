const notFound = () => {
  //Creamos la vista
  const notFoundView = document.createElement("body");
  notFoundView.classList.add("container-not-found");

  notFoundView.innerHTML = `
        <div class="copy-container center-xy">
            <p>
        404, page not found.
        </p>
        <span class="handle"></span>

        </div>
  `;
};

export default notFound;