let n = 59
let array = []
tot = 0;

for (let index = 0; index <= n; index+=1) {
    if (n % index === 0) {
        tot += 1
    }
    
}

if (tot === 2) {
    console.log(n, 'é um número primo!');
}
else {
    console.log(n, 'não é um número primo');
}
