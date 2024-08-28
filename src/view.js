import { renderCard } from './card.js'; // importa vista

export const renderItems = (data) => {
  // Crear una cadena concatenando los outerHTML de cada tarjeta renderizada
  return data.map(item => renderCard(item));
}

export const renderStats = (fieldPercentages) => {

  return `
    Ciencias de la Computación: ${fieldPercentages['Ciencias de la Computación'] || '0%'} ,
    Matemáticas: ${fieldPercentages['Matemáticas'] || '0%'} ,
    Química: ${fieldPercentages['Química'] || '0%'}
  `.trim();
}