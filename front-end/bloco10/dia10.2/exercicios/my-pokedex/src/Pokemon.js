import React from 'react';

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props
    const { value, measurementUnit } = pokemon.poke.averageWeight
    return(
      <div>
        <p>{pokemon.poke.name}</p>
        <p>{pokemon.poke.type}</p>
        <p>Average weight: {value} {measurementUnit}</p>
        <img src={pokemon.poke.image} alt='imagem do pokemon' ></img>
      </div>
    )
  }
}

export default Pokemon;