const petsData = [
    // Perros
    // Mascotas Abandonadas
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
    {
      "id": "perro-abandonado-002",
      "name": "Samantha",
      "type": "perro",
      "shortDescription": "Perra pequeña y cariñosa abandonada en la calle.",
      "description": "Samantha es una perra pequeña con pelaje blanco y negro, encontrada en la calle. A pesar de su situación, es dulce y cariñosa, ideal para una familia que busque una compañera leal y afectuosa. Samantha es muy adaptable y le encanta estar cerca de las personas. Está buscando un hogar donde pueda recibir el cariño y cuidado que merece. Su tamaño pequeño la hace ideal para apartamentos o casas con menos espacio, donde pueda sentirse completamente segura y muy amada.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%202.jpeg?alt=media&token=17af3603-6078-4bb2-a72b-7220951c8891",
      "adopted": false,
      "facts": {
        "age": {
          "years": 2,
          "months": 0
        },
        "gender": "Hembra",
        "breed": "Chihuahua",
        "size": "Pequeño",
        "temperament": "Dulce"
      },
      "extraInfo": {
        "curiosities": "Es excelente con los niños pequeños."
      }
    },
    {
      "id": "perro-abandonado-003",
      "name": "Rocky",
      "type": "perro",
      "shortDescription": "Perro mediano, abandonado en un refugio.",
      "description": "Rocky es un perro mediano con pelaje gris que fue dejado en un refugio. Busca una familia amorosa que pueda ofrecerle cariño y atención. Es leal y juguetón, ideal para un hogar que pueda brindarle mucha interacción y espacio para jugar. Rocky se lleva bien con otros perros y necesita un ambiente activo donde pueda canalizar su energía. Su carácter amable y su afecto hacia las personas lo convierten en un excelente compañero para cualquier familia dispuesta a ofrecerle un hogar.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%203.jpeg?alt=media&token=bc7bd01a-c48b-4e7b-a062-f6f15dab803d",
      "adopted": true,
      "facts": {
        "age": {
          "years": 16,
          "months": 0
        },
        "gender": "Macho",
        "breed": "Schnauzer",
        "size": "Mediano",
        "temperament": "Leal"
      },
      "extraInfo": {
        "curiosities": "Es muy protector con su familia."
      }
    },
    {
      "id": "perro-abandonado-004",
      "name": "Toby",
      "type": "perro",
      "shortDescription": "Perro mayor, abandonado en la calle.",
      "description": "Toby es un perro mayor con pelaje blanco que fue encontrado en la calle. Está esperando en un refugio por un hogar cálido y amoroso. Aunque es mayor, Toby sigue siendo cariñoso y tranquilo, ideal para una familia que busque un compañero apacible. No necesita mucho ejercicio, pero sí mucho cariño. Su naturaleza tranquila lo convierte en un gran amigo para aquellos que buscan un perro tranquilo y amoroso que pueda integrarse fácilmente en su vida diaria pero sobre todo que les brinde mucha felicidad.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%204.jpeg?alt=media&token=7e4c0214-a386-4c3c-99f0-e692acc340e0",
      "adopted": false,
      "facts": {
        "age": {
          "years": 7,
          "months": 0
        },
        "gender": "Macho",
        "breed": "Cocker Spaniel",
        "size": "Mediano",
        "temperament": "Tranquilo"
      },
      "extraInfo": {
        "curiosities": "Le encanta recibir caricias en su barriga."
      }
    },
  
    // Mascotas Perdidas
    {
      "id": "perro-perdido-001",
      "name": "Max",
      "type": "perro",
      "shortDescription": "Perro perdido, busca a su dueño.",
      "description": "Max es un perro mediano con pelaje dorado que se perdió en un vecindario. Busca desesperadamente a su dueño. Es un perro activo y cariñoso que disfruta correr y jugar. Mientras tanto, Max está buscando un hogar temporal donde pueda recibir la atención y cuidados necesarios. Max es un compañero leal y afectuoso, ideal para quienes pueden ofrecerle un espacio seguro y mucho amor hasta que se reúna con su familia. Su carácter enérgico y su necesidad de compañía hacen que necesite un hogar activo.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%205.jpeg?alt=media&token=72a5d14c-e61d-4b6c-859d-c423b3c1d8c4",
      "adopted": true,
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
      "id": "perro-perdido-002",
      "name": "Lola",
      "type": "perro",
      "shortDescription": "Perra extraviada esperando a su dueño.",
      "description": "Lola es una perra pequeña con pelaje atigrado que se extravió en un parque local. Es una perra amistosa y cariñosa que se lleva bien con otras mascotas. Mientras espera a su dueño, Lola está disponible para ser adoptada por una familia amorosa que pueda ofrecerle un hogar temporal. Es ideal para quienes buscan una perra dulce y muy bien educada, que pueda integrarse sin problemas a su hogar pero sobre todo que proporcione todo el amor y compañía a sus cuidadores durante este tiempo de espera.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%206.jpeg?alt=media&token=a84c814f-4c1f-4d11-85ff-114034d307bf",
      "adopted": false,
      "facts": {
        "age": {
          "years": 4,
          "months": 0
        },
        "gender": "Hembra",
        "breed": "Bulldog Francés",
        "size": "Pequeño",
        "temperament": "Amigable"
      },
      "extraInfo": {
        "curiosities": "Disfruta de las siestas bajo el sol."
      }
    },
    {
      "id": "perro-perdido-003",
      "name": "Charlie",
      "type": "perro",
      "shortDescription": "Perro grande perdido buscando a su familia.",
      "description": "Charlie es un perro grande con pelaje peludo que se perdió en un vecindario. A pesar de estar perdido, Charlie sigue siendo un compañero leal y cariñoso. Es juguetón y necesita mucho espacio para moverse y jugar. Mientras busca a su familia, está disponible para un hogar temporal que le brinde cuidado, atención y mucho amor. Su tamaño y energía requieren un hogar con suficiente espacio y una familia dispuesta a interactuar con él, ofreciendo todo el amor, juegos y cuidado que necesita.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%207.jpeg?alt=media&token=598bed7f-b5d7-4e58-b762-3765a17f192f",
      "adopted": true,
      "facts": {
        "age": {
          "years": 12,
          "months": 0
        },
        "gender": "Macho",
        "breed": "Husky",
        "size": "Grande",
        "temperament": "Juguetón"
      },
      "extraInfo": {
        "curiosities": "Tiene una gran resistencia y energía."
      }
    },
    {
      "id": "perro-perdido-004",
      "name": "Molly",
      "type": "perro",
      "shortDescription": "Perra pequeña perdida en busca de su familia.",
      "description": "Molly es una perra pequeña con pelaje atigrado que se perdió en un parque local. Es amable y se lleva bien con otros animales. Mientras espera a su familia, Molly está buscando un hogar temporal donde pueda sentirse segura y querida. Su pequeño tamaño y naturaleza amistosa la hacen ideal para hogares con niños y otras mascotas. Molly necesita un entorno amoroso y seguro mientras se reúne con su familia, o una nueva familia que la adopte y le ofrezca un hogar permanente.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%208.jpeg?alt=media&token=bd1b9616-6a7f-4ba5-bb2a-9dbf2979edb1",
      "adopted": false,
      "facts": {
        "age": {
          "years": 2,
          "months": 0
        },
        "gender": "Hembra",
        "breed": "Yorkshire Terrier",
        "size": "Pequeño",
        "temperament": "Amigable"
      },
      "extraInfo": {
        "curiosities": "Sabe realizar algunos trucos sencillos."
      }
    },
  
    // Crías Recién Nacidas
    {
      "id": "perro-cria-001",
      "name": "Buddy",
      "type": "perro",
      "shortDescription": "Cachorro juguetón busca un hogar.",
      "description": "Buddy es un cachorro con pelaje negro y manchas blancas que fue rescatado junto a su madre. Está buscando un hogar amoroso donde pueda crecer feliz y saludable. Es muy juguetón y curioso, ideal para una familia que pueda ofrecerle el cuidado y atención necesarios durante su crecimiento. Buddy es un cachorro alegre que necesita mucho amor y una familia que le proporcione un ambiente seguro y estimulante para desarrollarse adecuadamente. Su energía y afecto lo convierten en un excelente compañero.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%209.jpeg?alt=media&token=8aa552bd-b70e-4d49-9214-5b0c28e7aa62",
      "adopted": true,
      "facts": {
        "age": {
          "years": 0,
          "months": 2
        },
        "gender": "Macho",
        "breed": "Beagle",
        "size": "Pequeño",
        "temperament": "Curioso"
      },
      "extraInfo": {
        "curiosities": "Es muy rápido corriendo y saltando."
      }
    },
    {
      "id": "perro-cria-002",
      "name": "Bella",
      "type": "perro",
      "shortDescription": "Cachorra dulce y juguetona, busca hogar.",
      "description": "Bella es una cachorra pequeña con pelaje marrón claro, ella fue rescatada de la calle. Es muy dulce y juguetona, ideal para una familia que busque una hermosa compañera llena de energía y amor. Bella está lista para un hogar donde pueda recibir cuidados y atención, donde pueda crecer en un ambiente amoroso. Su naturaleza cariñosa y su tamaño pequeño la hacen perfecta para familias con niños y para quienes buscan una mascota adorable y activa pero sobre todo que brinde alegría a sus días.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%2010.jpeg?alt=media&token=52d3b183-a9de-47c4-8a1e-825146ef540f",
      "adopted": false,
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
      "id": "perro-cria-003",
      "name": "Daisy",
      "type": "perro",
      "shortDescription": "Cachorra alegre y activa en busca de hogar.",
      "description": "Daisy es una linda cachorra de pelaje blanco con manchas negras, encontrada junto a su madre en un parque. Es muy activa, amorosa y alegre, ideal para aquellas familias que puedan ofrecerle un ambiente activo y amoroso. Daisy necesita un hogar en el cual pueda recibir los cuidados necesarios para crecer completamente saludable y feliz. Su energía y afecto hacia las personas la convierten en una excelente opción para quienes buscan un cachorro tierno, lleno de vida y con mucho amor para dar.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%2011.jpeg?alt=media&token=2516350d-7f85-4acf-8f6d-f28c8fed3f13",
      "adopted": true,
      "facts": {
        "age": {
          "years": 0,
          "months": 2
        },
        "gender": "Hembra",
        "breed": "Poodle",
        "size": "Pequeño",
        "temperament": "Alegre"
      },
      "extraInfo": {
        "curiosities": "Disfruta de correr y jugar en el jardín."
      }
    },
    {
      "id": "perro-cria-004",
      "name": "Maxie",
      "type": "perro",
      "shortDescription": "Cachorro travieso busca un hogar cariñoso.",
      "description": "Maxie es un cachorro pequeño con pelaje dorado y ojos brillantes, encontrado junto a sus hermanos en un refugio. Es un poco travieso y muy juguetón, ideal para una familia que pueda brindarle el amor y atención que necesita. Maxie está listo para un bello hogar donde pueda recibir el cuidado deseado para crecer feliz y saludable. Su personalidad vivaz y su tamaño pequeño lo hacen perfecto para familias que buscan un cachorro divertido y afectuoso que aporte alegría a su vida diaria.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Perros%2Fperro%2012.jpeg?alt=media&token=8c4917b0-ccc4-4830-9809-185bf74d27b5",
      "adopted": false,
      "facts": {
        "age": {
          "years": 0,
          "months": 10
        },
        "gender": "Macho",
        "breed": "Labrador Retriever",
        "size": "Pequeño",
        "temperament": "Travieso"
      },
      "extraInfo": {
        "curiosities": "Le encanta jugar con otros cachorros."
      }
    },
  
    // Gatos
    // Mascotas Abandonadas
    {
      "id": "gato-abandonado-001",
      "name": "Whiskers",
      "type": "gato",
      "shortDescription": "Gato de pelaje gris, abandonado en el jardín.",
      "description": "Whiskers es un gato de pelaje gris que fue abandonado en el jardín de una casa. Es un gato tranquilo y cariñoso que busca un hogar donde pueda sentirse feliz, seguro y amado. Le encanta descansar al sol y recibir caricias. Aunque fue abandonado, Whiskers sigue siendo amoroso y tranquilo. Lo mejor es que se adapta bien a nuevos entornos. Ideal para aquellas personas que buscan un compañero tranquilo al cual puedan ofrecerle un lugar cómodo, seguro y mucho cariño en su hogar.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%201.jpeg?alt=media&token=ded925e1-3588-4972-944d-1985795f3de9",
      "adopted": true,
      "facts": {
        "age": {
          "years": 4,
          "months": 0
        },
        "gender": "Macho",
        "breed": "Maine Coon",
        "size": "Grande",
        "temperament": "Tranquilo"
      },
      "extraInfo": {
        "curiosities": "Le gusta observar desde las ventanas."
      }
    },
    {
      "id": "gato-abandonado-002",
      "name": "Luna",
      "type": "gato",
      "shortDescription": "Gata pequeña y dulce, abandonada en la calle.",
      "description": "Luna es una hermosa gata pequeña con pelaje blanco y ojos azules que fue abandonada en la calle. Es dulce, tierna y cariñosa, ideal para una familia que busque una gata afectuosa que se adapte sin problemas a su hogar. Luna disfruta de las caricias en las orejas y es muy juguetona. Está buscando un hogar donde pueda recibir el amor y cuidado que necesita para sentirse segura. Su tamaño compacto y su naturaleza amigable la hacen perfecta para apartamentos o casas pequeñas.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%202.jpeg?alt=media&token=ed838caa-a4eb-42ed-93dc-ee06ecf290b2",
      "adopted": false,
      "facts": {
        "age": {
          "years": 2,
          "months": 0
        },
        "gender": "Hembra",
        "breed": "Siamés",
        "size": "Pequeño",
        "temperament": "Dulce"
      },
      "extraInfo": {
        "curiosities": "Le encanta jugar con bolitas de papel."
      }
    },
    {
      "id": "gato-abandonado-003",
      "name": "Simba",
      "type": "gato",
      "shortDescription": "Gato mediano, abandonado en un refugio.",
      "description": "Simba es un gato mediano con pelaje atigrado que fue dejado en un refugio. Es un gato amable, juguetón y cariñoso que está esperando por una familia amorosa. Simba es muy independiente todo el tiempo pero disfruta de la compañía humana y es perfecto para aquellos que buscan un compañero tranquilo y amoroso. Necesita un bello hogar donde pueda recibir el cuidado adecuado, completa seguridad y un lugar cómodo para descansar. Su tamaño y comportamiento calmado lo hacen ideal para diferentes tipos de hogares.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%203.jpeg?alt=media&token=944c9f5c-49cf-4d4f-9c5b-d3ac34b2b6f0",
      "adopted": true,
      "facts": {
        "age": {
          "years": 5,
          "months": 0
        },
        "gender": "Macho",
        "breed": "Bengalí",
        "size": "Mediano",
        "temperament": "Amable"
      },
      "extraInfo": {
        "curiosities": "Disfruta trepar y explorar."
      }
    },
    {
      "id": "gato-abandonado-004",
      "name": "Mia",
      "type": "gato",
      "shortDescription": "Gata mayor, abandonada en un patio.",
      "description": "Mia es una gata mayor con pelaje atigrado que fue abandonada en un patio. Aunque es mayor, sigue siendo muy activa, afectuosa y tranquila, ideal para una familia que busque una gata que se adapte a un hogar relajado. Mia disfruta de las siestas en lugares soleados y del contacto humano. Necesita un hogar donde pueda recibir todo ese cariño, seguridad y cuidados que necesita. Su carácter calmado y su tamaño la hacen perfecta para familias que buscan una compañera serena y cariñosa.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%204.jpeg?alt=media&token=7e8658a1-b67a-4508-a986-6f7d51503ef3",
      "adopted": false,
      "facts": {
        "age": {
          "years": 8,
          "months": 0
        },
        "gender": "Hembra",
        "breed": "Persa",
        "size": "Mediano",
        "temperament": "Tranquila"
      },
      "extraInfo": {
        "curiosities": "Le encanta ser cepillada."
      }
    },
  
    // Mascotas Perdidas
    {
      "id": "gato-perdido-001",
      "name": "Oliver",
      "type": "gato",
      "shortDescription": "Gato perdido con pelaje negro.",
      "description": "Oliver es un gato elegante con pelaje negro que se perdió en el vecindario. Busca desesperadamente a su familia a la cual extraña muchísimo y se encuentra asustado. Oliver es un gato cariñoso y juguetón que disfruta de la compañía humana y las caricias. Mientras espera ser encontrado, está disponible para un hogar temporal donde pueda recibir atención y cuidados. Su tamaño mediano y su naturaleza amigable lo hacen ideal para hogares que puedan ofrecerle un espacio seguro y afectuoso mientras se reúne con su familia.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%205.jpeg?alt=media&token=aaa601d8-d122-49c2-be85-929474d6c702",
      "adopted": true,
      "facts": {
        "age": {
          "years": 3,
          "months": 0
        },
        "gender": "Macho",
        "breed": "Siamés",
        "size": "Mediano",
        "temperament": "Cariñoso"
      },
      "extraInfo": {
        "curiosities": "Tiene un collar con su nombre y dirección."
      }
    },
    {
      "id": "gato-perdido-002",
      "name": "Bella",
      "type": "gato",
      "shortDescription": "Gata extraviada con pelaje atigrado.",
      "description": "Bella es una preciosa gata con pelaje atigrado que se extravió en un vecindario cercano. Es bastante amigable y se muy lleva bien con otras mascotas. Mientras busca a su familia, Bella está disponible para ser adoptada por una familia que pueda ofrecerle un hogar temporal lleno de cariño y juegos. Es ideal para hogares con otros animales o niños pequeños. Bella necesita un entorno amoroso y seguro mientras se reúne con su familia, o una nueva familia que le brinde un hogar permanente.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%206.jpeg?alt=media&token=604135bf-2efb-4ff2-ab73-7ef37611b357",
      "adopted": false,
      "facts": {
        "age": {
          "years": 2,
          "months": 0
        },
        "gender": "Hembra",
        "breed": "Maine Coon",
        "size": "Mediano",
        "temperament": "Amigable"
      },
      "extraInfo": {
        "curiosities": "Le encanta jugar con plumas."
      }
    },
    {
      "id": "gato-perdido-003",
      "name": "Charlie",
      "type": "gato",
      "shortDescription": "Gato gris perdido buscando a su dueño.",
      "description": "Charlie es un lindo gato con pelaje gris que se perdió en el vecindario. Busca a su dueño con urgencia y está un poco asustado. Es un gato bastante tranquilo, reservado y amoroso que necesita un hogar donde pueda sentirse completamente seguro y querido. Mientras espera ser encontrado por su familia, Charlie está disponible para un hogar temporal que pueda ofrecerle tranquilidad, cuidados y muchas caricias. Su naturaleza calmada y su tamaño mediano lo hacen ideal para un entorno hogareño, tranquilo y afectuoso.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%207.jpeg?alt=media&token=45fd6469-43f0-4f73-a8f8-96481363f593",
      "adopted": true,
      "facts": {
        "age": {
          "years": 4,
          "months": 0
        },
        "gender": "Macho",
        "breed": "British Shorthair",
        "size": "Mediano",
        "temperament": "Tranquilo"
      },
      "extraInfo": {
        "curiosities": "Es muy cariñoso una vez que se siente seguro."
      }
    },
    {
      "id": "gato-perdido-004",
      "name": "Mittens",
      "type": "gato",
      "shortDescription": "Gata blanca perdida, busca a su familia.",
      "description": "Mittens es una linda gata blanca con ojos verdes que se perdió en el área local. Es muy cariñosa y se adapta bastante bien a diferentes entornos. Mientras espera a ser encontrada por su familia, Mittens está disponible para ser adoptada por una familia que pueda ofrecerle un hogar temporal con amor y cuidados. Su pelaje blanco y su carácter amistoso la hacen ideal para cualquier hogar que pueda proporcionarle un lugar seguro, amoroso y cálido hasta que se reúna con su familia.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%208.jpeg?alt=media&token=75e77730-93be-4a6f-b9ad-ade804b7c637",
      "adopted": false,
      "facts": {
        "age": {
          "years": 3,
          "months": 0
        },
        "gender": "Hembra",
        "breed": "Siberiano",
        "size": "Mediano",
        "temperament": "Amigable"
      },
      "extraInfo": {
        "curiosities": "Sabe abrir puertas con las patas."
      }
    },
  
    // Crías Recién Nacidas
    {
      "id": "gato-cria-001",
      "name": "Milo",
      "type": "gato",
      "shortDescription": "Cachorro de gato juguetón busca hogar.",
      "description": "Milo es un cachorro de gato con pelaje rayado que fue encontrado junto a su madre. Es muy juguetón y curioso, ideal para una familia que busque un compañero activo y afectuoso. Milo está listo para ser adoptado por una familia que pueda ofrecerle el cuidado y atención necesarios para crecer feliz y saludable. Su energía y carácter juguetón lo convierten en una excelente opción para quienes buscan un gato joven y lleno de vida que pueda alegrar su hogar.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%209.jpeg?alt=media&token=2b8f3e97-a3c4-4d49-899d-5dddf7336d2f",
      "adopted": true,
      "facts": {
        "age": {
          "years": 0,
          "months": 2
        },
        "gender": "Macho",
        "breed": "Bengalí",
        "size": "Pequeño",
        "temperament": "Juguetón"
      },
      "extraInfo": {
        "curiosities": "Le encanta explorar y jugar con cajas."
      }
    },
    {
      "id": "gato-cria-002",
      "name": "Lily",
      "type": "gato",
      "shortDescription": "Cachorra de gata dulce en busca de amor.",
      "description": "Lily es una cachorra de gata con pelaje blanco y ojos azules que fue rescatada de la calle. Esta pequeña es muy dulce y cariñosa, ideal para familias que buscan una compañera afectuosa y tierna. Lily está lista para ser adoptada por un hogar donde pueda recibir todo el cariño y cuidado que necesita para crecer saludable y feliz. Su personalidad encantadora y su tamaño pequeño la hacen perfecta para cualquier hogar que pueda ofrecerle un lugar seguro, cálido y amoroso.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%2010.jpeg?alt=media&token=69893446-5f55-4809-bb38-32b818e4df7d",
      "adopted": false,
      "facts": {
        "age": {
          "years": 0,
          "months": 9
        },
        "gender": "Hembra",
        "breed": "Persa",
        "size": "Pequeño",
        "temperament": "Dulce"
      },
      "extraInfo": {
        "curiosities": "Disfruta de jugar con plumas y pelotas."
      }
    },
    {
      "id": "gato-cria-003",
      "name": "Oliver",
      "type": "gato",
      "shortDescription": "Cachorro de gato curioso y activo busca hogar.",
      "description": "Oliver es un pequeño cachorro de gato con pelaje atigrado que fue rescatado de un refugio. Es curioso, amoroso y activo, ideal para familias que buscan un compañero joven, cariñoso y juguetón. Oliver está listo para ser adoptado y necesita un hogar donde pueda recibir el amor, juegos y atención necesarios para crecer saludable y feliz. Su energía y curiosidad lo hacen perfecto para quienes disfrutan de interactuar con un gato activo y alegre, aportando diversión y mucho amor a su hogar.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%2011.jpeg?alt=media&token=95559c34-a6c3-47d6-8e5e-dca15a879d58",
      "adopted": true,
      "facts": {
        "age": {
          "years": 0,
          "months": 2
        },
        "gender": "Macho",
        "breed": "Abisinio",
        "size": "Pequeño",
        "temperament": "Curioso"
      },
      "extraInfo": {
        "curiosities": "Sabe escalar muebles con agilidad."
      }
    },
    {
      "id": "gato-cria-004",
      "name": "Sophie",
      "type": "gato",
      "shortDescription": "Cachorra de gata juguetona busca un hogar cariñoso.",
      "description": "Sophie es una cachorra de gata con un lindo pelaje gris claro que fue rescatada junto a sus hermanos. Es juguetona y cariñosa, ideal para una familia que pueda ofrecerle el cuidado, seguridad y atención que necesita. Sophie está lista para ser adoptada y se adapta muy bien a diferentes entornos. Su energía y afecto hacia las personas la convierten en una excelente opción para quienes buscan una tierna compañera joven y llena de vida que pueda alegrar su hogar pero sobre todo dar mucho amor.",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/almacenamiento-jas.appspot.com/o/Gatos%2Fgato%2012.jpeg?alt=media&token=50fcd012-5d03-46fa-ab73-707a3bc87cd4",
      "adopted": false,
      "facts": {
        "age": {
          "years": 0,
          "months": 3
        },
        "gender": "Hembra",
        "breed": "Ragdoll",
        "size": "Pequeño",
        "temperament": "Juguetona"
      },
      "extraInfo": {
        "curiosities": "Le encanta jugar con ratones de juguete."
      }
    }
  ];
  
  export default petsData;
  