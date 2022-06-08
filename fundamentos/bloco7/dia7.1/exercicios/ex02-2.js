const longestWord = (frase) => {
  let arr = frase.split(' ')
  let maior = arr[0]
  for (let index = 0; index < arr.length; index +=1) {
    if (maior.length < arr[index].length) {
      maior = arr[index]
    }
  }
  console.log(maior);
}




longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'