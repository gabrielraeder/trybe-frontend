let sect1 = document.querySelector('section')
    sect1.style.backgroundColor = 'pink'

let sect2 = document.querySelectorAll('section')[1]
    sect2.style.backgroundColor = 'yellow'


let h3 = document.querySelectorAll('h3');

for (key in h3) {
    if (key < 2) {
        h3[key].style.backgroundColor = 'purple'
    }
    else {
        h3[key].style.backgroundColor = 'black'
    }
}

