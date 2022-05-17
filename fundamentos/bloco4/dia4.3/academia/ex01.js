let array = [1, 2, 3, 4, 5, 6, 7, 8]
let element = 15

// for (index = 0; index < array.length; index +=1) {
//     if (element === array[index]) {
//         console.log(array.indexOf(element));
//     }
//     else {
//         console.log("Elemento não encontrado no array");
//     }
// }

if (array.indexOf(element) === undefined || array.indexOf(element) <= -1) {
    console.log("Elemento não encontrado no array");
}
else {
    console.log(array.indexOf(element));
}