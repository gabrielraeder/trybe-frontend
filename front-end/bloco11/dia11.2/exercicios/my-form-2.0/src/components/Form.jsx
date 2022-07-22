import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Cpf from './Cpf';
import Endereço from './Endereço';
import Cidade from './Cidade';
import Estado from './Estado';
import TipoMoradia from './TipoMoradia';

export default class Form extends Component {
  
  state = {
    name: '',
    email: '',
    cpf: '',
    endereço: '',
    cidade: '',
    estado: '',
    moradia: '',
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    }, () => {
      this.setState((prevState, _props) => ({
        name: prevState.name.toUpperCase(),
        endereço: prevState.endereço.replace(/[^a-zA-Z,. ]/g, "")
      }))
    })
  }

  onBlur = ({target}) => {
    if (target.value.match(new RegExp(/^\d/)) !== null) {
      target.value = ''
    }
  }
  
  render() {
    this.state.name.toUpperCase()
    const { name, email, cpf, endereço, cidade, estado } = this.state
    const { handleChange, onBlur } = this

    return (
      <fieldset>
        <Name name={name} handleChange={handleChange} /> <br />
        <Email email={email} handleChange={handleChange} /> <br />
        <Cpf cpf={cpf} handleChange={handleChange} /> <br />
        <Endereço endereço={endereço} handleChange={handleChange} /> <br />
        <Cidade cidade={cidade} handleChange={handleChange} onBlur={ onBlur }/> <br />
        <Estado estado={estado} handleChange={handleChange} /> <br /><br />
        <TipoMoradia handleChange={handleChange} /> <br />
      </fieldset>
    )
  }
}
