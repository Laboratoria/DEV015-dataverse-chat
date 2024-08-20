//import { getCharacters } from '../src/lib/dataFunction.js';

export function home() {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>Bienvenido al Dataverse Chat</h1>
    <p>Explora y conéctate con otros personajes.</p>
    <section>
            <form id="filter-form">
                <label for="family-filter" id="famFilter">Filtrar por:</label>
                <select id="family-filter" data-testid="select-filter" name="familyFilter">
                    <option value=""> </option>
                    <option value="bridgerton">Bridgerton</option>
                    <option value="featherington">Featherington</option>
                    <option value="basset">Basset</option>
                    <option value="danbury">Danbury</option>
                    <option value="real">Realeza</option>
                    <option value="No Tiene">No tiene</option>
                    <option value="mondrich">Mondrich</option>
                    <option value="crane">Crane</option>
                    <option value="cowper">Cowper</option>
                    <option value="granville">Granville</option>
                </select>
                <label for="alfabetico" id="alfabe">Ordenar por:</label>
                  <select id="alfabetico" data-testid="select-sort" name="alfabetico">
                    <option value=""> </option>
                    <option value="asc">Ordenar A-Z</option>
                    <option value="des">Ordenar Z-A</option>
                  </select>   
                <button type="button" data-testid="button-clear">Despejar</button>
            </form>
           
        </section>
  `;
  return viewEl;
}

//export function personajesRenderizados() {
// const viewEl = document.querySelector('#character-list');
// viewEl.innerHTML = `
//     <h1>Bienvenido al Dataverse Chat</h1>
//     <p>Explora y conéctate con otros personajes.</p>
//   `;
//}
export default home;