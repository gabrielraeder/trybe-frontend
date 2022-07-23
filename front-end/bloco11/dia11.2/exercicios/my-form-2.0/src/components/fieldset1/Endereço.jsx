import React, { Component } from 'react'

export default class Endereço extends Component {
  render() {

    const {handleChange, endereço} = this.props;

    let error = undefined;
    if (endereço.length >= 200) error = ' Limite de 200 caracteres';

    return (
      <label htmlFor="">Endereço: 
        <textarea 
          name="endereço" 
          cols="30" rows="3"
          onChange={ handleChange }
          value={ endereço }
          maxLength="300"
          required></textarea>
          <br />
        <span>{ error ? error : ''}</span>
      </label>
    )
  }
}
