import React, { Component } from 'react'

class Checkbox extends Component {
  render() {
    const { check, handler } = this.props;
    return (
      <label htmlFor="check">Checkbox
        <input type="checkbox" name="check" value={ check } onChange={handler} />
      </label>
    )
  }
}

export default Checkbox;