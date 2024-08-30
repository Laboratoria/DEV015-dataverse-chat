export default function filterComponent() {
  const filterEl = document.createElement("select");
  filterEl.setAttribute("id", "filterBy");
  filterEl.innerHTML = `
      <option value="">Tipo Guardián</option>
      <option value="">Selecciona una opción</option>
      <option value="guardian sistema solar interno">Guardian Sistema Solar Interno</option>
      <option value="guardian sistema solar externo">Guardian Sistema Solar Externo</option>
      <option value="guardian fuera del sistema solar">Guardian Fuera Sistema Solar</option>
      <option value="protectores">Protectores</option>
      <option value="gato guardian">Gato Guardian</option>
      <option value="enemigos">Enemigos</option>
  `;
  return filterEl;
}
