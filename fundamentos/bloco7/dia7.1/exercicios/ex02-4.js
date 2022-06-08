const changeX = (novo) => {
  let frase = 'Tryber x aqui!'
  let result = frase.replace('x', novo)

  return result
}

// console.log(changeX('Bebeto'));

let frase = changeX('Bebeto')

let arr = ['JS', 'Python', 'React', 'HTML', 'CSS']
arr.sort()

const texto = (frase) => `${frase} Minhas cinco principais habilidades são: 
 -${arr[0]}
 -${arr[1]}
 -${arr[2]}
 -${arr[3]}
 -${arr[4]}

 #gotrybe`;

console.log(texto(frase));