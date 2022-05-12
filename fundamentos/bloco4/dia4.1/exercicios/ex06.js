const item = 'bispo'

switch (item.toLowerCase()) {
    case 'bispo':
        console.log('Bispo -> Diagonais');
        break;
    case 'rainha':
        console.log('Rainha -> Todas as direções, quantas casas desejar');
        break;
    case 'rei':
        console.log('Rei -> Todas as direções, uma casa por vez');
        break;
    case 'cavalo':
        console.log('Cavalo -> movimento em "L"');
        break;
    case 'peão':
        console.log('Peão -> para frente, uma casa por vez')
        break;
    case 'torre':
        console.log('Torre -> Linha reta para qualquer lado');
    default:
        console.log('ERRO');
        break;
}