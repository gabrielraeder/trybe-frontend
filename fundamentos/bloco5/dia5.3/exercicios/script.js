function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function setDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let daysList = document.querySelector('#days')

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index]
        let dayItem = document.createElement('li');

        dayItem.innerHTML = day;
        if (day === 24 || day === 31) {
            dayItem.className = 'holiday day'
        }
        else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'friday day'
        }
        else if (day === 25) {
            dayItem.className = 'holiday friday day'
        }
        else {
            dayItem.className = 'day';
        }

        daysList.appendChild(dayItem)
    }
}

setDays()


function createButton(string) {
    let button = document.createElement('button')
    button.setAttribute('id', 'btn-holiday')
    button.innerHTML = string

    document.querySelector('.buttons-container').appendChild(button)
}

createButton('Feriados')

const holiday = document.querySelectorAll('.holiday')

function feriados() {
    for (let key in holiday) {
        holiday[key].style.color = 'red';
        if (holiday[key].className === 'novo') {
            holiday[key].style.color = '#666'
            if (holiday[key].innerText == 25) {
                holiday[key].className = 'holiday friday day'
            } else {
                holiday[key].className = 'holiday day'
            }
        } else {
            holiday[key].style.color = 'red';
            holiday[key].className = 'novo'
        }

    }
}



function createButton2(string) {
    let button = document.createElement('button')
    button.setAttribute('id', 'btn-friday')
    button.innerHTML = string

    document.querySelector('.buttons-container').appendChild(button)
}

createButton2('Sexta-feira')

function sexta() {
    let sexta = document.querySelectorAll('.friday')
    let dias = [4, 11, 18, 25]
    for (let index = 0; index < sexta.length; index += 1) {
        
        if (sexta[index].innerText.includes('SEXTOU')) {
            sexta[index].innerText = dias[index]
        } else {
            sexta[index].innerText = 'SEXTOU!';
        }
    }

}


function zoom(event) {
    event.target.style.fontSize = '30px'
}
function reset(event) {
    event.target.style.fontSize = '20px'
}



document.querySelector('#btn-holiday').addEventListener('click', feriados)

document.querySelector('#btn-friday').addEventListener('click', sexta)
document.querySelector('#days').addEventListener('mouseover', zoom)
document.querySelector('#days').addEventListener('mouseout', reset)


function tasks(string) {
    let span = document.createElement('span');
    span.innerText = string
    document.querySelector('.my-tasks').appendChild(span)
}

tasks('Cozinhar')

function legendaCor(string) {
    let div = document.createElement('div');
    div.style.backgroundColor = string
    div.className = 'task'
    document.querySelector('.my-tasks').appendChild(div)
}

legendaCor('red')

let div = document.querySelector('.my-tasks').lastChild

div.addEventListener('click', function () {

    if (div.className.includes('taskSelected')) {
        div.className = 'task'
    }
    else {
        div.className = 'taskSelected'
    }
})

function referTask(event) {
    let color = document.querySelector('.taskSelected').style.backgroundColor

    if (event.target.style.color === color)
        event.target.style.color = '#666'
    else {
        event.target.style.color = color
    }
}

document.querySelector('#days').addEventListener('click', referTask)