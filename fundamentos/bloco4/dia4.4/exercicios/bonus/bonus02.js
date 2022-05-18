// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.


function arrayOfNumbers(array) {
    let par = []
    for (v of array) {
        for (value of v) {
            if (value%2 === 0) {
                par.push(value)
            }
        }
    }
    return par
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector));