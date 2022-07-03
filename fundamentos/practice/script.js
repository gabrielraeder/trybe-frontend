const createOneGame = () => {
  const array = [];
  for (let index = 0; array.length < 6; index += 1) {
    let num = Math.ceil(Math.random() * 59)
    if (!array.includes(num)) {
      array.push(num)
    }
  }
  return array.sort((a, b) => a - b);
}

const createElementI = () => {
  const element = document.createElement('i');
  element.setAttribute('class', 'games')
  document.getElementById('games').appendChild(element)
}


const addGames = () => {
  const numberGames = document.getElementById('num-jogos')
  for (let index = 0; index < numberGames.value; index += 1) {
    createElementI();
    const jogo = createOneGame()
    document.getElementById('games').lastElementChild.innerHTML = jogo.join(' -- ')
  }
  numberGames.value = '';
}

document.getElementById('submit-btn').addEventListener('click', addGames)

const clearGames = () => {
  const jogos = document.getElementById('games')
  while (jogos.firstChild){
    jogos.removeChild(jogos.lastChild)
  }
}

document.getElementById('reset-btn').addEventListener('click', clearGames)