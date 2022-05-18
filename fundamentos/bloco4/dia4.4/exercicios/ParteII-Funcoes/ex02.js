// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function highIndex (array) {
    let maior = 0
    for (let key in array) {
        if (array[key] > array[maior]) {
            maior = key
        }
    }
    return maior
}

let arr = [2, 3, 6, 7, 10, 1];

console.log(highIndex(arr));