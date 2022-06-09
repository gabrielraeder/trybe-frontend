const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTurno = (obj, key, value) => obj[key] = value

addTurno(lesson2, 'turno', 'noite')

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const showKeys = (obj) => console.log(Object.keys(obj));

// showKeys(lesson1)

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const showSize = (obj) => console.log(Object.keys(obj).length);

// showSize(lesson1)

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const showValues = (obj) => console.log(Object.values(obj));

// showValues(lesson1)

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
let allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

// console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const total = Object.values(allLessons.lesson1)[1] + Object.values(allLessons.lesson2)[1] + Object.values(allLessons.lesson3)[1];

// console.log(total);

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (obj, number) => Object.values(obj)[number];

// console.log(getValueByNumber(lesson2, 1));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (obj, key, value) => {
  const object = Object.entries(obj)
  for (let valor of object) {
    if (valor[0] === key && valor[1] === value)
    return true
  }
  return false
}

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// bonus1 - 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const checkStudents = (materia) => {
  const arr = Object.values(allLessons)
  let total = 0;
  for (let value of arr) {
    if (value.materia === materia) {
      total = total + value.numeroEstudantes
    }
  }
  return total;
}

// console.log(checkStudents('História'));

// bonus2 - 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (prof) => {
  const arr = Object.values(allLessons)
  let fim = {'professor': prof, 'aulas': []};
  for (let value of arr) {
    if (value.professor === prof) {
      fim.aulas.push(value.materia)
    }
  }
  fim.estudantes = checkStudents(fim.aulas[0])
  return fim;
}

console.log(createReport('Carlos'))