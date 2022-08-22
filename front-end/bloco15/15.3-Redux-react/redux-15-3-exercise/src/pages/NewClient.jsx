import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newClientAction } from '../store/actions';

class NewClient extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, age, email } = this.state;
    const { dispatch } = this.props;

    return (
      <fieldset>
        <legend>Novo cadastro</legend>
        <label htmlFor="name"> Nome:
          <input type="text"
          id="name"
          name="name"
          value={ name }
          onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="age"> Idade:
        <input type="number"
          id="age"
          name="age"
          value={ age }
          onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="email"> E-mail:
        <input type="text"
          id="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          />
        </label>
        <Link to="/clients">
         <button type="button" onClick={ () => dispatch(newClientAction(this.state))}>Salvar</button>
        </Link>
      </fieldset>
    )
  }
}

export default connect()(NewClient)
