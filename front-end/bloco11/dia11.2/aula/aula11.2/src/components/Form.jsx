import React, { Component } from 'react'
import './Form.css'
import NomeEmail from './NomeEmail';
import Escolha from './Escolha';
import EstadoFavorito from './Estadofavorito';
import Checkbox from './Checkbox';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);

    this.state = {
      estadoFavorito: '',
      email: '',
      escolha: '',
      nome: '',
      check: false,
      formularioComErros: false,
    };
  }

  handleError(param) {
      this.setState({
        formularioComErros: param,
      })
    
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    }, () => {
      const { estadoFavorito } = this.state;
      const estadolength = estadoFavorito.length > 100 ? true : false;
      this.setState({
        formularioComErros: estadolength
      })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <NomeEmail nome={this.state.nome} email={this.state.email} handler={this.handleChange}/>
          </fieldset>
          <br />
            <Escolha escolha={this.state.escolha} handler={this.handleChange} />
          <br />
            <EstadoFavorito 
            estadoFavorito={this.state.estadoFavorito} 
            handler={this.handleChange} />
          <br />
            <Checkbox check={this.state.check} handler={this.handleChange} />
          <br />

          <label htmlFor="">
            <input type="file" ref={this.fileInput} />
            <button onClick={ this.handleSubmit }>Submit</button>
          </label>
          
        </form>
      </div>
    );
  }
}

export default Form;