// FILTRAR DATOS
export const filterData = (data, filterBy='mainField', value='') => {

    // filtrar tarjetas
    // Si estamos filtrando por una categoría específica
    if( value ){
      return data.filter((cardData)=>cardData['facts']['mainField'].includes(value));
    }
    else{
      // por defecto mostrar todos los datos
      return data;
    }
  }
  
  // ORDENAR DATOS
  export const sortData = (data, sortBy='name', sortOrder='asc') => {
  
    // ordenar por nombre
    
    if( sortOrder === 'desc'){
      data.sort((a,b)=>b.name.localeCompare(a.name));
    }
    else{
      // ordenar ascendiente por defecto
      data.sort((a,b)=>a.name.localeCompare(b.name));
    }
    
  
    return data;
  }
  
  // STATS
  export const computeStats = (data) => {
    // Usar reduce para contar las ocurrencias de cada campo
    const fieldCounts = data.reduce((acc, card) => {
      card.facts.mainField.forEach(dato => {
        acc[dato] = (acc[dato] || 0) + 1;
      });
      return acc;
    }, {});
  
    const totalItems = data.length;
  
    // Calcular los porcentajes
    const fieldPercentages = Object.fromEntries(
      Object.entries(fieldCounts).map(([key, value]) => [key, `${Math.round((value / totalItems) * 100)}%`])
    );
  
    return fieldPercentages;
  }