let n = 5;
let line = []
let a = 0
for (let index = 1; index <= n; index += 1) {
    for (let ind = 0; ind < index; ind += 1) {
        a = n - index
        line = Array(a).fill(' ')
        for (let i = 0; i < index; i+=1){
            line.push('x')
        }
    }
    console.log(line.join(''));
    
}
    

