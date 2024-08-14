export default function Card(data) {
    //const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.classList.add('Card');
    li.innerHTML = `
    <div>
        <div class="div-item">
            <img itemprop="image" src="${data.imageUrl}" alt="${data.name}">
        </div>
        <h2 itemprop="nombre">${data.name} (${data.shortDescription})</h2>
    </div>
    <div class="item-facts">
        <p class="facts"><strong>Cumpleaños:</strong> <span itemprop="birthDate">${data.facts.fechaDeNacimiento}</span></p>
        <p class="facts"><strong>Signo Zodiacal:</strong> <span itemprop="zodiacSign">${data.facts.signoZodiacal}</span></p>
        <p class="facts"><strong>Tipo de Guardiana:</strong> <span itemprop="guardianType">${data.facts.tipoDeGuardiana}</span></p>
    </div>
`;

    return li;
}