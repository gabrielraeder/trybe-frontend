import React, { Component } from 'react'
import { connect } from 'react-redux';

class Clients extends Component {
  state = {
    isLogged: false,
  }

  componentDidMount() {
    this.checkLogin()
  }

  checkLogin = () => {
    const { login } = this.props;
    const { email, password } = login;
    this.setState({
      isLogged: email.length > 0 && password.length > 0 ? true : false,
    })
  }

  render() {
    const { isLogged } = this.state;

    return (
      <div>
        {(!isLogged) ? <h2>Login não efetuado</h2> : (
          <div>
            <h2>Clientes Cadastrados</h2>
            <ul>

            </ul>
            <button>Novo Cadastro</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
})

export default connect(mapStateToProps, null)(Clients)