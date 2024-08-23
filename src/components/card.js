export default function renderCard(item) {
    const li = document.createElement('li');
    li.classList.add('card-list');
    li.innerHTML = `
    <div>
          <h2 itemprop="nombre">${item.name} (${item.shortDescription})</h2>

        <div class="div-item">
            <img itemprop="image" src="${item.imageUrl}" alt="${item.name}">     

           <div class="item-facts">
              <p class="sign"><strong>Signo Zodiacal:</strong> <span itemprop="zodiacSign">${item.facts.signoZodiacal}</span></p>
              <p class="date"><strong>Fecha de nacimiento:</strong> <span itemprop="birthDate">${item.facts.fechaDeNacimiento}</span></p>
            </div>
        </div>
        <div class="description">
         <p class="type"><strong>Tipo de Guardiana:</strong> <span itemprop="guardianType">${item.facts.tipoDeGuardiana}</span></p>
         <h3 itemprop="nombre">${item.name} (${item.description})</h3>
        </div>
    </div>
`;

    return li;
}

