let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';
for (let index = 0; index < array.length; index += 1) {
    if (index == 0) {
        maior = array[index]
        menor = array[index]
    }
    if ( array[index].length > maior.length) {
        maior = array[index]
    }
    if (array[index].length < menor.length) {
        menor = array[index]
    }   
}
console.log('Maior palavra: ', maior);
console.log('Menor pavavra: ', menor);
