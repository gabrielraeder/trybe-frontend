import React, { Component } from 'react'

export default class Estado extends Component {
  render() {

    const { estado, handleChange } = this.props;

    return (
      <label htmlFor="">Estado:

        <select name="estado" value={estado} onChange={handleChange} required>
          <option value="rj">Rio de Janeiro</option>
          <option value="sp">São Paulo</option>
          <option value="mg">Minas Gerais</option>
          <option value="ba">Bahia</option>
          <option value="pr">Paraná</option>
          <option value="sc">Santa Catarina</option>
          <option value="rs">Rio Grande do Sul</option>
          <option value="go">Goiás</option>
          <option value="mt">mato Grosso</option>
          <option value="ms">Mato Grosso do Sul</option>
          <option value="ce">Ceará</option>
        </select>
      </label>
    )
  }
}
