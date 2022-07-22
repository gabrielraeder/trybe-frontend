import React, { Component } from 'react'

export default class Cidade extends Component {
  render() {

    const { cidade, handleChange, onBlur } = this.props;

    let error = undefined;
    if (cidade.length >= 28) error = ' Limite de 28 caracteres';


    return (
      <label htmlFor="">Cidade: 
        <input 
          type="text" 
          name="cidade" 
          value={cidade} 
          onChange={ handleChange }
          onBlur={onBlur}
          maxLength="28"
          required/>
          <br />
        <span>{ error ? error : ''}</span>
      </label>
    )
  }
}
