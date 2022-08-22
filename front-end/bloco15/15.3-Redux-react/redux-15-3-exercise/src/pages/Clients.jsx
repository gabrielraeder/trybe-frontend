import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeClientAction } from '../store/actions';

class Clients extends Component {
  state = {
    isLogged: false,
    sortClients: false,
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

  handleSortButton = () => {
    this.setState((prevState) => ({
      sortClients: !prevState.sortClients,
    }))
  }

  mapClients = (clients) => {
    const { dispatch } = this.props;
    return clients.map((client, i) => (
      <li key={ i }>
        <h4>{`${client.name}, ${client.age}`}</h4>
        <h5>{ client.email }</h5>
        <button onClick={ () => dispatch(removeClientAction(client)) }>❌</button>
      </li>
    ))
    }

  sortClients = (clients) => {
    const { sortClients } = this.state;
    const ordered = [...clients]
    ordered.sort((a, b) => a.name > b.name ? 1 : -1)

    if (sortClients) {
      return this.mapClients(ordered)
    }
    return this.mapClients(clients)
  }

  render() {
    const { isLogged, sortClients } = this.state;
    const { clients } = this.props;

    return (
      <div>
        {(!isLogged) ? <h2>Login não efetuado</h2> : (
          <div>
            { clients.length === 0 ? <h2>Nenhum cliente</h2> : (
              <div>
                <h2>Clientes Cadastrados</h2>
                <ul>
                  { this.sortClients(clients) }
                </ul>
              </div>

            ) }
            <button onClick={ this.handleSortButton }>{sortClients ? 'Desfazer' : 'Ordenar nomes'}</button>
            <Link to="/newclient">
              <button>Cadastrar Novo Cliente</button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  clients: state.clientReducer.clients,
})

export default connect(mapStateToProps, null)(Clients)