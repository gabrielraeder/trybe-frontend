import React, { Component } from 'react'

export default class Cpf extends Component {
  render() {
    
    const {handleChange, cpf} = this.props;

    let error = undefined;
    if (cpf.length >= 11) error = ' Limite de 11 caracteres';

    return (
      <label htmlFor="">CPF: 
        <input 
          type="text"
          name="cpf"
          value={ cpf }
          onChange={ handleChange }
          maxLength="11"
          required />
          <br />
        <span>{ error ? error : ''}</span>
      </label>
    )
  }
}
