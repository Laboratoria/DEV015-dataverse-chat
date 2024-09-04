
const notFound = () => {
  const element = document.createElement('div');
  element.innerHTML = `<h1>404 - Not Found</h1>`;
  return element;
};

export default notFound;