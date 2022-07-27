import React, { Component } from 'react'

export default class Descrição extends Component {
  render() {

    const { descrição, handleChange } = this.props;

    let error = undefined;
    if (descrição.length >= 500) error = 'Limite de 500 caracteres.'

    return (
      <div>
        <label htmlFor="">
        <textarea name="descrição" id="descrição"
            value={descrição}
            onChange={handleChange}
            cols="30" rows="5"
            maxLength="500"
            required></textarea>
        </label>
        <span>{error ? error : ''}</span>
      </div>
    )
  }
}
