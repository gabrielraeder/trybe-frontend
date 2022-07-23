import React, { Component } from 'react'

export default class Cv extends Component {
  render() {

    const { cv, handleChange } = this.props;

    let error = undefined;
    if (cv.length >= 1000) error = 'Limite de 1000 caracteres.'

    return (
      <div>
        <label>Resumo Cv:
          <textarea name="cv" id="cv"
            value={cv}
            onChange={handleChange}
            cols="30" rows="5"
            maxLength="1000"
            required></textarea>
        </label>
        <span>{error ? error : ''}</span>
      </div>
    )
  }
}
