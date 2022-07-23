import React, { Component } from 'react'

export default class TipoMoradia extends Component {
  render() {

    const { handleChange } = this.props;

    return (
      <div>
        <label htmlFor="">
          <input type="radio" name="moradia" value="Casa" onChange={ handleChange } required /> Casa
        </label>
        <label htmlFor="">
          <input type="radio" name="moradia" value="apartamento" onChange={ handleChange }/> Apartamento
        </label>
      </div>
    )
  }
}
