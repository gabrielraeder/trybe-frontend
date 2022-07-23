import React, { Component } from 'react'
import Cv from './fieldset2/Cv'
import Cargo from './fieldset2/Cargo';
import Descrição from './fieldset2/Descrição';

export default class Fieldset2 extends Component {
  render() {

    const { cv, cargo, descrição, handleChange } = this.props;

    return (
      <div>
        <h3>Ultima Experiência profissional</h3>
        <Cv cv={cv} handleChange={handleChange}/><br />
        <Cargo cargo={cargo} handleChange={handleChange}/><br />
        <Descrição descrição={descrição} handleChange={handleChange} />
      </div>
    )
  }
}
