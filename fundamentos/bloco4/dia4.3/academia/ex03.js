let array = [1, 50]

for (i = 2; i <= 50; i +=1) {
    if (i === 2) {
        array[array.length - 1] = i
    }
    else {
        array.push(i)
    }
}

console.log(array);