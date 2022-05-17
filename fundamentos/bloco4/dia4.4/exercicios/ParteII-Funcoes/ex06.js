// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sum(n) {
    let sum = 0;
    for (index = 0; index <= n; index += 1) {
        sum += index
    }
    return sum
}

console.log(sum(10));