export default function ErrorView(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'Page not found';
  return viewEl;
}
