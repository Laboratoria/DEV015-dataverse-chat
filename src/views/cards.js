export default function Cards(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'This is the Cards page.';
    return viewEl;
  }

/*   export default function Cards(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = `cards: ${props.name}`;
    return viewEl;
  }

  const linkEl = document.getElementById('data-link');
linkEl.addEventListener('click', () => navigateTo("/cards", { name: "Xochitl" }));
 */