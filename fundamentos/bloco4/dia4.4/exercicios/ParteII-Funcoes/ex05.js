// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeatedNumber(array) {
    let total = 0
    let most = 0
    for (value of array) {
        let tot = 0
        for (v of array) {
            if (value === v) {
                tot += 1
            }
        }
        if (tot > total) {
            total = tot
            most = value
        }
        
    }
    return most
}
arr = [2, 3, 3, 5, 8, 2, 3];

console.log(repeatedNumber(arr));