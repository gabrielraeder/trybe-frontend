let array = [];
let impar = [];
for (i = 1; i <=50; i +=1) {
    array.push(i)
}
for (index = 0; index < array.length; index +=1) {
    if (array[index]%2 != 0) {
        console.log(array[index], ', ');
    }
}