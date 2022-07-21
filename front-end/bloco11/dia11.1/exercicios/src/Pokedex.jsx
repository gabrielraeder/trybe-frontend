import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';
import Button from './components/Button';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      filter: 'All',
    };
    this.addClick = this.addClick.bind(this);
    this.filterUpdate = this.filterUpdate.bind(this);
  }

  addClick() {
    this.setState((estado) => ({
      counter: estado.counter + 1,
    }));
  }

  filterUpdate(event) {
    this.setState({
      filter: event.target.innerText,
      counter: 0,
    });
  }

  render() {
    const { pokemons } = this.props;
    const { counter, filter } = this.state;

    const filteredPokemon = pokemons.filter((poke) => {
      const { type } = poke;
      if (filter === 'All') return poke;
      return type === filter;
    });

    const pokemonElements = filteredPokemon.map((pokemon) => (
      <Pokemon key={ pokemon.id } pokemon={ pokemon } />
    ));

    const tam = pokemonElements.length;
    const btn = document.querySelector('.btn');

    if (btn && pokemonElements.length <= 1) {
      btn.disabled = true;
    } else if (btn && pokemonElements.length > 1) {
      btn.disabled = false;
    }
    if (btn && counter + 1 === tam) {
      btn.disabled = true;
    }

    const types = pokemons.map((poke) => poke.type);

    const noRepeatedTypes = [...new Set(types)];

    const mapBtn = noRepeatedTypes
      .map((type) => <Button key={ type } onclick={ this.filterUpdate } text={ type } />);

    return (
      <div className="pokedex">
        <div id="pokemonsDiv">
          {pokemonElements[counter]}
        </div>
        <div id="buttonsDiv">
          <div>
            <Button onclick={ this.addClick } text="Seguinte" />
            <Button onclick={ this.filterUpdate } text="All" />
          </div>
          <div>
            { mapBtn }
          </div>
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
