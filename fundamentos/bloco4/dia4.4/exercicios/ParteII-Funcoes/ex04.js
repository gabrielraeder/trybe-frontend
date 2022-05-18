// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function bigName(array) {
    let big = ''
    for (value of array) {
        if (value.length > big.length) {
            big = value
        }
    }
    return big
}

let arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(bigName(arr));
