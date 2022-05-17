let all = [info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'SIM',
},
info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'SIM',
}
]

for (value of all) {
    for (key in value){
        if (key === 'recorrente') {
            if (all[0][key] === all[1][key]) {
                console.log('Ambos Recorrentes.');
            }
        }
        else{
            console.log(all[0][key], 'e', all[1][key] );
        }
    }
    break

}
