import React, { Component } from 'react'
import Name from './fieldset1/Name'
import Email from './fieldset1/Email';
import Cpf from './fieldset1/Cpf';
import Endereço from './fieldset1/Endereço';
import Cidade from './fieldset1/Cidade';
import Estado from './fieldset1/Estado';
import TipoMoradia from './fieldset1/TipoMoradia';

export default class Fieldset1 extends Component {
  render() {

    const { name, email, cpf, endereço, cidade,
      estado, handleChange, onBlur } = this.props

    return (
      <div>
        <h3>Informações Pessoais</h3>
        <Name name={name} handleChange={handleChange} /> <br />
        <Email email={email} handleChange={handleChange} /> <br />
        <Cpf cpf={cpf} handleChange={handleChange} /> <br />
        <Endereço endereço={endereço} handleChange={handleChange} /> <br />
        <Cidade cidade={cidade} handleChange={handleChange} onBlur={ onBlur }/> <br />
        <Estado estado={estado} handleChange={handleChange} /> <br /><br />
        <TipoMoradia handleChange={handleChange} /> <br /> 
      </div>
    )
  }
}
