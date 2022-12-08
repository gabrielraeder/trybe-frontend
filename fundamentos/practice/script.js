const createOneGame = () => {
  const array = [];
  while (array.length < 6) {
    let num = Math.ceil(Math.random() * 59)
    if (!array.includes(num)) {
      array.push(num)
    }
  }
  return array.sort((a, b) => a - b);
}

const createElement = (...itens) => {
  const element = document.createElement(itens[0]);
  element.setAttribute('class', itens[1]);
  document.getElementById(itens[2]).appendChild(element)
}


const addGames = () => {
  const numberGames = document.getElementById('num-jogos')
  for (let index = 0; index < numberGames.value; index += 1) {
    createElement('i', 'games', 'games');
    const jogo = createOneGame()
    document.getElementById('games').lastElementChild.innerHTML = jogo.join(' -- ')
    createElement('hr', 'hr', 'games');
  }
  numberGames.value = '';
}

document.getElementById('submit-btn').addEventListener('click', addGames)

const clearGames = () => {
  const jogos = document.getElementById('games')
  while (jogos.firstChild){
    jogos.removeChild(jogos.lastChild)
  }
  createElement('hr', 'hr', 'games');
}

document.getElementById('reset-btn').addEventListener('click', clearGames)