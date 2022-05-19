const paragraph = document.getElementById("paragraph");
    paragraph.style.color = "green";

let title = document.getElementById('page-title');
    title.textContent = 'Senhor dos Anéis'

let secondP = document.getElementById('second-paragraph');
    secondP.textContent = 'Melhor filme'
    secondP.style.color = 'red'

let sub = document.getElementById('subtitle')
    sub.textContent = 'Vencedor de 11 oscars'

let par = document.getElementsByClassName('par');
    par[0].innerHTML = 'harry potter'
    par[0].style.color = 'blue'

document.getElementsByTagName('h4')[0].textContent = '11 Fu**ing oscars!!'