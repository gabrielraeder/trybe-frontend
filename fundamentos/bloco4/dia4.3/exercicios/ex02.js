let word = 'roma';
let a = []

for (i = word.length - 1; i >= 0; i -= 1) {
    // console.log(word[i]);
    a.push(word[i])
}


console.log(a.join(''));