let bruto = 3000;
let inss;
let ir;

if (bruto <= 1556.94) {
    inss = bruto*0.08;
}
else if (bruto > 1556.94 && bruto <= 2594.92) {
    inss = bruto*0.09;
}
else if (bruto > 2594.92 && bruto <= 5189.82) {
    inss = bruto*0.11;
}
else {
    inss = 570.88;
}

let salarioINSS = bruto - inss

if (salarioINSS < 1903.99) {
    ir = 0
}
else if(salarioINSS > 1903.98 && salarioINSS <= 2826.65) {
    ir = (salarioINSS*0.075) - 142.80
}
else if(salarioINSS > 2826.66 && salarioINSS <= 3751.05) {
    ir = (salarioINSS*0.15) - 354.80
}
else if(salarioINSS > 3751.05 && salarioINSS <= 4664.68) {
    ir = (salarioINSS*0.225) - 636.13
}
else {
    ir = (salarioINSS*0.275) - 869.36
}

let liquido = salarioINSS - ir;

console.log(liquido);