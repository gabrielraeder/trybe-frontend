// 🚀 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

function countFruit(array) {
    let count = {}
    for (let i = 0; i < array.length; i += 1){
        if (i === 0) {
            count[array[i]] = 1
        }
        for (let key in count) {
            if (array[i] != key) {
                count[array[i]] = 1
            }
            else if (array[i] === key) {
                let tot = count[key]
                count[key] = tot + 1
            }
        }
    }
    return count
}

array = ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']

console.log(countFruit(array));