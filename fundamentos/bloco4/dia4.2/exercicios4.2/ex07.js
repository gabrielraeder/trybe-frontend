let numbers = [5, 9, 3, 19, 70, 8, 100, 200, 35, 27];
let menor = numbers[0]
for (let index = 0; index < numbers.length; index+=1) {
    if (menor > numbers[index]){
        menor = numbers[index]
    }
}

console.log(menor);