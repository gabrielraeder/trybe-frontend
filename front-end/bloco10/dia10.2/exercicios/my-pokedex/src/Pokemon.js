import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props.poke
    const { value, measurementUnit } = pokemon.averageWeight
    return(
      <div className='pokemon'>
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
        <p>Average weight: {value} {measurementUnit}</p>
        <img src={pokemon.image} alt='imagem do pokemon' className='images'></img>
      </div>
    )
  }
}

export default Pokemon;