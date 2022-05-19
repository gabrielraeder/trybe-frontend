 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 let paragrafo = document.getElementsByTagName('p')
    paragrafo[0].textContent = 'Trabalhando como DEV com um bom salário!'

let main = document.getElementsByClassName('main-content')
for (value of main) {
    value.style.backgroundColor = 'rgb(76,164,109)'
}

let center = document.getElementsByClassName('center-content')[0]
    center.style.backgroundColor = 'white'

document.getElementsByTagName('h1')[0].textContent = 'Exercício 5.1 - JavaScript'

for (key in paragrafo) {
    paragrafo[key].style.textTransform = 'uppercase'
    paragrafo[key].style.textAlign = 'center'
    console.log(paragrafo[key].innerText);
}