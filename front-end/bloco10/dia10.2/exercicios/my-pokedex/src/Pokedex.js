import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return pokemons.map((poke) => <Pokemon key={poke.id} poke={poke}/>)
  }
}

export default Pokedex;