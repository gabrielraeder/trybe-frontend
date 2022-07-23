import React, { Component } from 'react'

export default class Email extends Component {
  render() {
    
    const {handleChange, email} = this.props;

    let error = undefined;
    if (email.length >= 50) error = ' Limite de 50 caracteres';

    return (
      <label htmlFor="">Email: 
        <input 
          type="text" 
          name="email" 
          value={ email } 
          onChange={ handleChange } 
          maxLength="50"
          required />
          <br />
        <span>{ error ? error : ''}</span>
      </label>
    )
  }
}
