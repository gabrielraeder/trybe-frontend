const apiCoin = 'https://api.coincap.io/v2/assets'
// const fetch = require('node-fetch');

const fetchCoins = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const {data} = await fetch(apiCoin, myObject)
    .then((item) => item.json())
    .then((coin) => coin)
    .catch((error) => console.log(`Erro encontrado ${error}`));
  
  const firstTen = data.filter((element, index) => index < 10);

  firstTen.forEach((element) => {
    let i = document.createElement('i');
    let price = Math.round(element.priceUsd * 100) / 100
    i.innerText = `${element.name} (${element.symbol}: ${price})`
    document.getElementById('lista-cripto').appendChild(i)
  })
}

// Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06.

window.onload = () => fetchCoins()