import React from 'react';
import './App.css';
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    const { value, measurementUnit } = pokemon.averageWeight
    return (
      <section className='pokemon-card'>
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>Average weight: {value} {measurementUnit}</p>
        </div>
        <img className='pokemon-img' src={pokemon.image} alt='imagem do pokemon'></img>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }),
};

export default Pokemon;