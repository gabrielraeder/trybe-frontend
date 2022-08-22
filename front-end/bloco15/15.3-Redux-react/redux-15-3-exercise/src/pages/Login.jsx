import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../store/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { dispatchLogin } = this.props;
    return (
      <fieldset>
        <legend>Login</legend>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password">
          <input
            type="text"
            id="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>

        <Link to="/clients">
          <button type="button" onClick={ () => dispatchLogin(this.state) }>Login</button>
        </Link>
      </fieldset>
    )
  };
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (state) => dispatch(loginAction(state))
})

export default connect(null, mapDispatchToProps)(Login)
