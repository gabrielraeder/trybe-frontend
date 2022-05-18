// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function checkWord(word, end) {
    let section = word.length - end.length
    if (word.slice(section) === end) {
        return true
    }
    else {
        return false
    }

}

console.log(checkWord('trybe', 'be'));
console.log(checkWord('joaofernando', 'fernan'));