let h1 = document.createElement('h1')
    h1.setAttribute('id', 'title')
    h1.innerText = 'Exercicios 5.2 - JavaScript DOM'

    document.querySelector('body').appendChild(h1)

let main = document.createElement('main')
    main.setAttribute('class', 'main-content')
    document.querySelector('body').appendChild(main)

let center = document.createElement('section')
    center.setAttribute('class', 'center-content')
    main.appendChild(center)

let paragrafo = document.createElement('p')
    paragrafo.innerText = 'Yabadabadoo!! Yabadabadoo!! Yabadabadoo!! Yabadabadoo!! Yabadabadoo!! '
    center.appendChild(paragrafo)

let left = document.createElement('section')
    left.setAttribute('class', 'left-content')
    main.appendChild(left)


let right = document.createElement('section')
    right.setAttribute('class', 'right-content')
    main.appendChild(right)

let img = document.createElement('img')
    img.setAttribute('class', 'small-image')
    img.src = 'https://picsum.photos/200'
    left.appendChild(img)

let lista = document.createElement('ul')
    right.appendChild(lista)

let array = ['um','dois','três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for (let index = 0; index < array.length; index += 1) {
    let value = array[index]
    let listItem = document.createElement('li')
    listItem.innerText = value
    lista.appendChild(listItem)
}

let h31 = document.createElement('h3')
let h32 = document.createElement('h3')
let h33 = document.createElement('h3')

    main.appendChild(h31)
    main.appendChild(h32)
    main.appendChild(h33)

h31.setAttribute('class', 'description')
h32.setAttribute('class', 'description')
h33.setAttribute('class', 'description')

main.removeChild(left)

right.style.marginRight = 'auto'

center.style.backgroundColor = 'green'

lista.lastChild.remove()
lista.lastChild.remove()
