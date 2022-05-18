function maior(a, b, c) {
    if (a > b && a > c) {
        return 'Primeiro valor é maior'
    }
    else if (b > a && b > c) {
        return 'Segundo valor é maior'
    }
    else {
        return 'Terceiro valor é o maior'
    }
}

console.log(maior(50, 20, 30));