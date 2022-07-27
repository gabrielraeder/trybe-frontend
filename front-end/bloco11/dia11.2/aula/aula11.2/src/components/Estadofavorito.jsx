import React, { Component } from 'react'

class EstadoFavorito extends Component {
  render() {
    const { estadoFavorito, handler } = this.props;

    let error = undefined;

    if (estadoFavorito.length > 100) {
      error = 'Texto muito grande!'
    }

    return (
      <div>
        <label>
          Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
          <textarea name="estadoFavorito" value={estadoFavorito} onChange={handler} />
        </label>
        <span>{error ? error : ''}</span>
      </div>
    )
  }
}

export default EstadoFavorito;