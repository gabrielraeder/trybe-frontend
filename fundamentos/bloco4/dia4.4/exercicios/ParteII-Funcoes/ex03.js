// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowIndex (array) {
    let menor = 0
    for (let key in array) {   
        if (array[key] < array[menor]) {
            menor = key
        }
    }
    return menor
}

let arr = [2, 4, 6, 7, 10, 0, -3];

console.log(lowIndex(arr));