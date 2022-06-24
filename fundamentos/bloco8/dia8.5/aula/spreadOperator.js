// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'tangerina', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maçã', 'limão', 'pitanga'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ... additional]
};

console.log(fruitSalad(specialFruit, additionalItens));