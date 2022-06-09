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
let allLessons = {};
allLessons.lesson1 = lesson1
allLessons.lesson2 = lesson2
allLessons.lesson3 = lesson3


console.log(allLessons);

