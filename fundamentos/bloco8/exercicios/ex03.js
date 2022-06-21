// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito),
//  o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)e o terceiro é uma função que checa
//  se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
//  Ao final a HOF deve retornar o total da contagem de respostas certas.

//  - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
//  e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (certas, estudante) => {
  let pontos = 0;
  for (let index = 0; index < certas.length; index += 1) {
    if (certas[index] === estudante[index]) {
      pontos += 1;
    }
    else if (certas[index] !== estudante[index] && estudante[index] !== 'N.A') {
      pontos += -0.5
    }
  }
  return pontos;
}

const total = (gabarito, respostasEstudante, função) => função(gabarito, respostasEstudante)

console.log(total(RIGHT_ANSWERS, STUDENT_ANSWERS, check));
