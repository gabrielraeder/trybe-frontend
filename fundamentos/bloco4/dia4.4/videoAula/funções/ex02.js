
function maior(a, b) {
    if (a > b) {
        return 'Primeiro valor é maior'
    }
    else if (b > a) {
        return 'Segundo valor é maior'
    }
    else {
        return 'Valores iguais'
    }
}

console.log(maior(50, 51));