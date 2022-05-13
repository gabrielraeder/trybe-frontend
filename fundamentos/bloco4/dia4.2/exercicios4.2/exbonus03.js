let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let x2 = []

for (let index = 0; index < num.length; index += 1) {
    if (index < num.length - 1) {
        x2.push(num[index] * num[index+1])
    }
    else {
        x2.push(num[index]*2)
    }

}
console.log(x2);