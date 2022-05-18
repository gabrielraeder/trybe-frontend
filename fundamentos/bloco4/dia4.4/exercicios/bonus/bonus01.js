// 1 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romanNumber(n) { // para 3 numeros romanos
    let value = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000,
    }
    let first = 0
    let second = 0
    let third = 0
    let result = 0
    for (key in value) {
        if (n[0] === key) {
            first = value[key]
        }
        if (n[1] === key) {
            second = value[key]
        }
        if (n[2] === key) {
            third = value[key]
        }

    }
    if (first < second){
        result = second - first -third
    }
    else if (first > second && second > third) {
        result = first + second + third
    }
    else if (first > second && third > second) {
        result = first - second + third
    }
    else {
        result = first + second + third
    }
    return result
}

console.log(romanNumber('xiv'));