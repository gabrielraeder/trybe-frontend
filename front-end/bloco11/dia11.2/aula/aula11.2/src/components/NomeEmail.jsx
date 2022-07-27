import React, { Component } from 'react'

class NomeEmail extends Component {
  render() {
    const {nome, email, handler} = this.props;
    return (
      <div>
        <label htmlFor="nome">nome: 
              <input 
              type="text" 
              name='nome' 
              onChange={ handler }
              value={ nome } />
            </label>
            <label htmlFor="email">Email: 
              <input type="email" name='email' value={ email } onChange={ handler }/>
            </label>
      </div>
      )
  }
}

export default NomeEmail;