function valor(a) {
    if (a >= 1) {
        return 'POSITIVE'
    }
    else if (a <= -1) {
        return 'NEGATIVE'
    }
    else {
        return 'ZERO'
    }
}

console.log(valor(0));