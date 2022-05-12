let state = '2';

switch (state) {
    case 'aprovada':
        console.log('Parabéns! Aprovada!');
        break;
    case 'lista':
        console.log('Lista de espera');
        break;
    case 'reprovada':
        console.log('Reprovada');
        break;
    default:
        console.log('Não se aplica');
        break;
}