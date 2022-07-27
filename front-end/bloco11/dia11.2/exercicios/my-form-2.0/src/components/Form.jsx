import React, { Component } from 'react';
import Fieldset2 from './Fieldset2';
import Fieldset1 from './Fieldset1';

export default class Form extends Component {

  state = {
    name: '',
    email: '',
    cpf: '',
    endereço: '',
    cidade: '',
    estado: '',
    moradia: '',
    cv: '',
    cargo: '',
    descrição: '',
  }

  handleChange = ({ target }) => {
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

  onBlur = ({ target }) => {
    if (target.value.match(new RegExp(/^\d/)) !== null) {
      target.value = ''
    }
  }

  resetButton = (event) => {
    event.preventDefault()
    const keys = Object.keys(this.state);
    keys.forEach((key) => {
      this.setState({
        [key]: ''
      })
    });
  }

  showForm = (event) => {
    event.preventDefault()
    const entries = Object.entries(this.state)
    const infos = entries.map((item) => <p> {`${item[0]} => ${item[1]}`} </p>)
    infos.forEach((info) => {
      const atual = document.getElementById('showInfo').innerHTML
      console.log(info.props.children[1]);
      document.getElementById('showInfo').innerHTML = `${atual} <br/> ${info.props.children[1]}`
    })
    document.getElementById('form').remove()
  }


  render() {
    this.state.name.toUpperCase()
    const { name, email, cpf, endereço, cidade,
      estado, descrição, cargo, cv } = this.state
    const { handleChange, onBlur, resetButton, showForm } = this

    return (
      <div>
        <form id="form" action="">
          <fieldset>
            <Fieldset1 key="field1" name={name} email={email} cpf={cpf} endereço={endereço}
              cidade={cidade} estado={estado} handleChange={handleChange} onBlur={onBlur} />
          </fieldset>
          <br />
          <fieldset>
            <Fieldset2 key="field1" descrição={descrição} cargo={cargo} cv={cv} handleChange={handleChange} />
          </fieldset>
          <br />
          <button key="submitbtn" onClick={showForm}>Submit</button>
          <button key="resetbtn" onClick={resetButton}>Limpar dados</button>
        </form>
        <div key="showInfo" id="showInfo">
        </div>
      </div>
    )
  }
}
