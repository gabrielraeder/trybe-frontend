// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => joke);;
  
  const h4 = document.createElement('h4');
  h4.innerText = joke;
  document.getElementById('jokeContainer').appendChild(h4)
};

window.onload = () => fetchJoke();