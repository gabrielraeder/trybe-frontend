const apiCoin = 'https://api.coincap.io/v2/assets'
// const fetch = require('node-fetch');
const rates = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json'

const fetchCoins = async () => {

  const {data} = await fetch(apiCoin)
    .then((item) => item.json())
    .then((coin) => coin)
    .catch((error) => console.log(`Erro encontrado ${error}`));
  
  
  const real = await fetch(rates)
    .then((moedas) => moedas.json())
    .then((moeda) => moeda)
    .catch((erro) => console.log(`Erro encontrado ${erro}`));
  
  const firstTen = data.filter((element, index) => index < 10);

  firstTen.forEach((element) => {
    let i = document.createElement('i');
    let price = (Math.round((element.priceUsd * real.brl) * 100) / 100);
    i.innerText = `${element.name} (${element.symbol}) => R$ ${price}`
    document.getElementById('lista-cripto').appendChild(i)
  })
}

// Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06.

window.onload = () => fetchCoins()
// fetchCoins()