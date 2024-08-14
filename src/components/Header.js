export default function Header(title) {
    const headerEl = document.createElement('header');
    headerEl.innerHTML = `<h1>${title}</h1>`;
    return headerEl;
}
