document.querySelector('#elementoOndeVoceEsta').parentElement.style = 'red'

let aqui = document.querySelector('#elementoOndeVoceEsta')

aqui.firstElementChild.textContent = 'Olá Mundo!'

document.querySelector('#pai').firstElementChild

aqui.parentElement.style.backgroundColor = 'green'

aqui.nextElementSibling

document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = 'yellow'

let irmaonovo = document.createElement('section')
irmaonovo.innerText = 'irmão Novo'
aqui.parentElement.append(irmaonovo)

let filho = document.createElement('section')
filho.innerText = 'Filho novo'
aqui.appendChild(filho)

let junior = document.createElement('section')
junior.innerText = 'juninho'
junior.setAttribute('id','junior')

document.querySelector('#primeiroFilhoDoFilho').appendChild(junior)

let terceirofilho = document.querySelector('#junior').parentElement.parentElement.nextElementSibling
console.log(terceirofilho);

let pai = document.querySelector('#pai')

let quarto = document.querySelector('#quartoEUltimoFilho')

pai.removeChild(quarto)
pai.removeChild(document.querySelector('#primeiroFilho'))
aqui.removeChild(document.querySelector('#segundoEUltimoFilhoDoFilho'))
pai.removeChild(document.querySelector('#terceiroFilho'))