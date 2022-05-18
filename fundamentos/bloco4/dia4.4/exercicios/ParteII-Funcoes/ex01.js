// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function checkPalindrome(word) {
    let invert = []
    for (index = word.length -1; index >= 0; index -= 1) { 
        invert.push(word[index])
    }
    let inv = invert.join('')
    if (word === inv) {
        return 'Palíndromo!'
    } else {
        return 'Não é um palíndromo.'
    }
}

console.log(checkPalindrome('arara'));