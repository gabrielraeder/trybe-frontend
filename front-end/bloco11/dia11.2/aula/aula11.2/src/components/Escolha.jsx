import React, { Component } from 'react'

class Escolha extends Component {
  render() {
    const { escolha, handler } = this.props;

    let error = undefined;
    if (escolha === '') error = '*'

    return (
      <div>
        <label htmlFor="escolha">
          Escolha sua palavra chave:
          <select name="escolha" id='escolha' value={escolha} onChange={handler}>
            <option></option>
            <option value="estado">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
        <span>{error ? error : ''}</span>
      </div>
    )
  }
}

export default Escolha;