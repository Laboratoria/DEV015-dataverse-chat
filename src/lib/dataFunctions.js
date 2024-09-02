/* Manipulación de datos */
import petsData from '../data/dataset.js';

const dataFunctions = {

  /* Mostrar Tarjetas */

  showPets: () => {
    if(Array.isArray(petsData)){
      return petsData;
    }
    else{
      return [];
    }
  },

  //------------------ Filtro de Datos ------------------//

  // Filtro Tipo //

  filterDataByType: (petsData,filterBy,value)=> {
    return petsData.filter(petType => petType[filterBy] === value)
  },

  // Filtro Edad //

  filterDataByAge: (petsData,filterBy, minValue, maxValue) => {
    const petsWithAgeInMonths = petsData.map(pet => {
      const { years, months } = pet.facts[filterBy];
      const totalMonths = (years * 12) + months;
      return {
        name:pet.name, type:pet.type, shortDescription:pet.shortDescription, description:pet.description, imageUrl:pet.imageUrl, facts:pet.facts, age:pet.age, gender:pet.gender, breed:pet.breed, size:pet.size, temperament:pet.temperament,
        totalMonths
      };
    });

    return petsWithAgeInMonths.filter(pet =>
      pet.totalMonths >= minValue && pet.totalMonths <= maxValue
    );

  },

  // Filtro Género y Tamaño //

  filterDataByValue: (petsData,filterBy,value)=> {
    return petsData.filter(petFilteredBy => petFilteredBy.facts[filterBy] === value)
  },

  //------------------ Filtro de Ordenamiento ------------------//

  orderPetsBy: (petsData, sortBy, sortOrder)=> {
    return petsData.sort((a, z) => {

      if (a[sortBy] > z[sortBy]) {
        return sortOrder === "asc" ? 1 : -1;
      } else if (a[sortBy] < z[sortBy]) {
        return sortOrder === "asc" ? -1 : 1;
      }
    });

  },

  //------------------ Estadísticas ------------------//

  countAdoptedPets: (petsData) => {
    return petsData.reduce((acumulador,pet)=> {
      if (pet.adopted) {
        return acumulador+1
      }

      else {
        return acumulador
      }
    },0)
  },

}

export default dataFunctions;