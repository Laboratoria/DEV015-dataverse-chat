import { filterData, sortData, computeStats, averageStats } from '../src/lib/dataFunctions.js';
import { data as fakeData } from './data.js';

//FILTER TEST ------------------------------------------------------------------------------------------------------

describe('filterData', () => {

  it('should Spiderman by gender and return the quantity of female', () => {

    const totalSpiderman = filterData(fakeData, 'gender', 'F');

    expect(totalSpiderman.length).toBe(4);
  })
})

describe('filterData', () => {

  it('should Spiderman by gender and return the quantity of male', () => {

    const totalSpiderman = filterData(fakeData, 'gender', 'M');

    expect(totalSpiderman.length).toBe(6);
  })
})

describe('filterData', () => {

  it('should Spiderman by age and return the quantity of under 20', () => {

    const totalSpiderman = filterData(fakeData, 'age', '1');

    expect(totalSpiderman.length).toBe(5);
  })
})

describe('filterData', () => {

  it('should Spiderman by age and return the quantity of under 30', () => {

    const totalSpiderman = filterData(fakeData, 'age', '2');

    expect(totalSpiderman.length).toBe(2);
  })
})

describe('filterData', () => {

  it('should Spiderman by age and return the quantity of greather than 30', () => {

    const totalSpiderman = filterData(fakeData, "age", "3").concat(filterData(fakeData, "age", "4"));

    expect(totalSpiderman.length).toBe(3);
  })
})

//SORT TEST ------------------------------------------------------------------------------------------------------------------------
describe('sortData', () => {

  it('Should Spiderman in ascending order and return the name of the first one in the list', () => {

    const orderSpiderman = sortData(fakeData, 'name', 'asc');

    expect(orderSpiderman[0].name).toBe('Silk');
  })
})

describe('sortData', () => {

  it('Should Spiderman in ascending order and return the name of the fifth in the list', () => {

    const orderSpiderman = sortData(fakeData, 'name', 'asc');

    expect(orderSpiderman[4].name).toBe('Spider-Man J');
  })
  
})

describe('sortData', () => {

  it('Should Spiderman in descending order and return the name of the first one in the list', () => {

    const orderSpiderman = sortData(fakeData, 'name', 'desc');

    expect(orderSpiderman[0].name).toBe('Spider-Woman IV');
  })
  
})

describe('sortData', () => {

  it('Should Spiderman in desscending order and return the name of the seventh in the list', () => {

    const orderSpiderman = sortData(fakeData, 'name', 'desc');

    expect(orderSpiderman[7].name).toBe('Spider-Man 2211');
  })
  
})

//COMPUTE STATS ---------------------------------------------------------------------------------------------

describe('computeStats', () => {

  it('should show the total percentage of female spider-man', () => {

    const percentageGender = computeStats(filterData(fakeData, 'gender', 'F'), fakeData);

    expect(percentageGender).toBe('40.00');
  })
  
})

describe('computeStats', () => {

  it('should show the total percentage of male spider-man', () => {

    const percentageGender = computeStats(filterData(fakeData, 'gender', 'M'), fakeData);

    expect(percentageGender).toBe('60.00');
  })
  
})

describe('computeStats', () => {

  it('should show the total percentage of New York city spider-man', () => {

    const percentageCity = computeStats(filterData(fakeData, 'city', 'N'), fakeData);

    expect(percentageCity).toBe('50.00');
  })
  
})

//AVERAGE STATS ---------------------------------------------------------------------------------------------

describe('averageStats', () => {

  it('should show the total average age of spider-man', () => {

    const averageAge = averageStats(fakeData);

    expect(averageAge).toBe('25');
  })
  
})