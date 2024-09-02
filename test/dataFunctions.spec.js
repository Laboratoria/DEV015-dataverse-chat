import dataFunctions from '../src/lib/dataFunctions.js';
import { data } from './data.js';

// Test Filtro Type //

describe('filterDataByType - Filter pets by type', () => {
  it('returns the correct number of pets filtered by type `perro`', () => {
    const pruebatipo = dataFunctions.filterDataByType(data,'type','perro');
    expect(pruebatipo.length).toBe(3);
  });

  it('returns the correct number of pets filtered by type `gato`', () => {
    const pruebatipo = dataFunctions.filterDataByType(data,'type','gato');
    expect(pruebatipo.length).toBe(3);
  });
});

// Test Flitro Edad //

describe('filterDataByAge', () => {
  it('returns the correct number of pets filtered by age between 0 and 12 months', () => {
    const pruebatipo = dataFunctions.filterDataByAge(data, 'age', '0', '12');
    expect(pruebatipo.length).toBe(2);
  });

  it('returns the correct number of pets filtered by age between 13 and 119 months', () => {
    const pruebatipo = dataFunctions.filterDataByAge(data, 'age', '13', '119');
    expect(pruebatipo.length).toBe(4);
  });
});

// Test Filtro Género //

describe('filterDataByValue', () => {
  it('returns the correct number of pets filtered by gender `Macho`', () => {
    const pruebatipo = dataFunctions.filterDataByValue(data,'gender', 'Macho');
    expect(pruebatipo.length).toBe(4);
  });

  it('returns the correct number of pets filtered by gender `Hembra`', () => {
    const pruebatipo = dataFunctions.filterDataByValue(data,'gender', 'Hembra');
    expect(pruebatipo.length).toBe(2);
  });
});

// Test Flitro Tamaño //

describe('filterDataByValue', () => {
  it('returns the correct number of pets filtered by size `Grande`', () => {
    const pruebatipo = dataFunctions.filterDataByValue(data,'size', 'Grande');
    expect(pruebatipo.length).toBe(2);
  });

  it('returns the correct number of pets filtered by size `Mediano`', () => {
    const pruebatipo = dataFunctions.filterDataByValue(data,'size', 'Mediano');
    expect(pruebatipo.length).toBe(2);
  });
});

// Test Ordenamiento de Tipo //

describe('orderPetsBy - Order pets by name', () => {

  it ('should return a list of pets ordered alphabetically by name in ascending order', () => {
    const pruebatipo = dataFunctions.filterDataByType(data,'type','perro') //de acuerdo a posiciones
    const orderby = dataFunctions.orderPetsBy(pruebatipo,'name','asc')
    const expected = [
      {
        "id": "perro-cria-002",
        "name": "Bella",
        "type": "perro",
        "shortDescription": "Cachorra dulce y juguetona, busca hogar.",
        "description": "Bella es una cachorra pequeña con pelaje marrón claro, ella fue rescatada de la calle. Es muy dulce y juguetona, ideal para una familia que busque una hermosa compañera llena de energía y amor. Bella está lista para un hogar donde pueda recibir cuidados y atención, donde pueda crecer en un ambiente amoroso. Su naturaleza cariñosa y su tamaño pequeño la hacen perfecta para familias con niños y para quienes buscan una mascota adorable y activa pero sobre todo que brinde alegría a sus días.",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%2010.jpeg?alt=media&token=52d3b183-a9de-47c4-8a1e-825146ef540f",
        "adopted": true,
        "facts": {
          "age": {
            "years": 0,
            "months": 3
          },
          "gender": "Hembra",
          "breed": "Cocker Spaniel",
          "size": "Pequeño",
          "temperament": "Dulce"
        },
        "extraInfo": {
          "curiosities": "Le encanta jugar con juguetes de peluche."
        }
      },
      {
        "id": "perro-perdido-001",
        "name": "Max",
        "type": "perro",
        "shortDescription": "Perro perdido, busca a su dueño.",
        "description": "Max es un perro mediano con pelaje dorado que se perdió en un vecindario. Busca desesperadamente a su dueño. Es un perro activo y cariñoso que disfruta correr y jugar. Mientras tanto, Max está buscando un hogar temporal donde pueda recibir la atención y cuidados necesarios. Max es un compañero leal y afectuoso, ideal para quienes pueden ofrecerle un espacio seguro y mucho amor hasta que se reúna con su familia. Su carácter enérgico y su necesidad de compañía hacen que necesite un hogar activo.",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%205.jpeg?alt=media&token=72a5d14c-e61d-4b6c-859d-c423b3c1d8c4",
        "adopted": false,
        "facts": {
          "age": {
            "years": 2,
            "months": 0
          },
          "gender": "Macho",
          "breed": "Golden Retriever",
          "size": "Mediano",
          "temperament": "Activo"
        },
        "extraInfo": {
          "curiosities": "Sabe hacer trucos básicos como dar la pata."
        }
      },
      {
        "id": "perro-abandonado-001",
        "name": "Rex",
        "type": "perro",
        "shortDescription": "Perro grande y amistoso, abandonado en el parque.",
        "description": "Rex es un perro grande con pelaje marrón y ojos alegres. Abandonado en el parque local, Rex busca una nueva familia que le brinde el amor y la atención que merece. Es un perro muy enérgico que disfruta jugar con pelotas y correr en el jardín. Ideal para quienes disfrutan de actividades al aire libre y buscan un compañero leal. Rex necesita mucho ejercicio y atención, por lo que es perfecto para familias activas que puedan ofrecerle el espacio y cariño necesarios para que se desarrolle felizmente.",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%201.jpeg?alt=media&token=0aa405af-4449-48f1-95dc-f3326dd5325f",
        "adopted": true,
        "facts": {
          "age": {
            "years": 9,
            "months": 2
          },
          "gender": "Macho",
          "breed": "Labrador Retriever",
          "size": "Grande",
          "temperament": "Enérgico"
        },
        "extraInfo": {
          "curiosities": "Le encanta nadar en el lago."
        }
      },
    ]
    expect(orderby).toEqual(expected);

  })
})

describe('countAdoptedPets - Count adopted pets', () => {
  it('returns the total number of adopted pets', () => {
    const adoptados = dataFunctions.countAdoptedPets(data)
    expect(adoptados).toBe(3);
  });
});
