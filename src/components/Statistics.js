import { calcularEstadisticas } from '../dataFunctions.js';

export function Statistics({ characters }) {
  const viewEl = document.createElement('div');
  const stats = calcularEstadisticas(characters);
  viewEl.innerHTML = `
    <p>Casados: ${stats.casados}</p>
    <p>Solteros: ${stats.solteros}</p>
    <p>Viudos: ${stats.viudos}</p>
    <p>Amantes: ${stats.amantes}</p>
  `;
  return viewEl;
}
