const custo = 100;
const venda = 200;

let custototal = (custo*1.20)

if (custo <= -1 || venda <= -1) {
    console.log('ERRO');
}
else {
    console.log((venda - custototal) *1000);
}