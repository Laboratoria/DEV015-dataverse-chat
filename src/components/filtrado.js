const filtrado =  () => { 

  const filtradoEl = document.createElement('filtrado');
  filtradoEl.innerHTML = `
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
    `;
  return filtradoEl
}
export default filtrado;