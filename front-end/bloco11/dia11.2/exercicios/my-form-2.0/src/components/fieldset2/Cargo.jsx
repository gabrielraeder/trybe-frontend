import React, { Component } from 'react'

export default class Cargo extends Component {
  
  onMouseEnter = () => {
    alert('Preencha com cuidado esta informação')
  }
  
  render() {

    const { cargo, handleChange } = this.props;

    let error = undefined;
    if (cargo.length >= 40) error = 'Limite de 40 caracteres.'

    return (
      <div>
        <label htmlFor="cargo">Cargo: 
          <input type="text"
          value={cargo}
          id="cargo"
          name="cargo"
          onChange={ handleChange }
          onMouseEnter={this.onMouseEnter}
          maxLength="40"/>
        </label>
        <span>{error ? error : ''}</span>
      </div>
    )
  }
}
