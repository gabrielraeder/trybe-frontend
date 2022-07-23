import React, { Component } from 'react'

export default class Name extends Component {
  render() {

    const {handleChange, name} = this.props;

    let error = undefined;
    if (name.length >= 40) error = ' Limite de 40 caracteres';

    return (
      <label htmlFor="">Nome: 
        <input type="text" name="name" value={ name } onChange={ handleChange } maxLength="40" required/>
        <br />
        <span>{ error ? error : ''}</span>
      </label>
    )
  }
}
