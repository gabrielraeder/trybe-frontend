import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onclick, text } = this.props;
    return (
      <button className="btn" type="submit" onClick={ onclick }>{text}</button>
    );
  }
}

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
