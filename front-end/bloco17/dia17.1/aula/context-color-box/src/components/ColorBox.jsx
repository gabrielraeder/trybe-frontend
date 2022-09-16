// ./components/ColorBox.js
import React from 'react';
import '../styles/box.css';
import myContext from '../myContext';

class ColorBox extends React.Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter < 3 ? prevState.counter + 1 : 0,
    }))
  }

  render() {
    const value = this.context;
    const {counter} = this.state;

    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: value[counter] } }
        onClick={ this.handleClick }
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType = myContext;

export default ColorBox;
