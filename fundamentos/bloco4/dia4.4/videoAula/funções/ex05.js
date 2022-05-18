// Triangulo

function isItTriangule(a, b, c) {
    if (a + b + c == 180 && a >= 1 && b >= 1 && c >= 1) {
        return true
    }
    else if (a + b + c != 180 && a >= 1 && b >= 1 && c >= 1) {
        return false
    }
    else if (a <= 0 || b <= 0 || c <= 0) {
        return 'Inválido'
    }
}

console.log(isItTriangule(60, 60, 60));