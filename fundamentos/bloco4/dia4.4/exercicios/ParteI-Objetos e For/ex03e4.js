let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'SIM',
};

// EXERCICIO 03
for (let key in info) {
    console.log(key);
}

// EXERCICIO 04
for (let key in info) {
    console.log(info[key]);
}