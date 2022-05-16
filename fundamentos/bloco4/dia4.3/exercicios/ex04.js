let array = [];
let tot = 0
for (i = 0; i <= 59; i += 1) {
    array.push(i)
}
let maior = 1
for (index = 0; index < array.length; index += 1) {
    for (i2 = 1; i2 <= array.length; i2 +=1) {
        if (array[index] % i2 === 0) {
            tot += 1
        }
    }
    if (tot == 2) {
        maior = array[index]
    }
    tot = 0 
    
}
console.log(maior);

