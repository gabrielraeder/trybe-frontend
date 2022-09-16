// ./App.js
import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import myContext from './myContext';

class App extends React.Component {
  render() {
    const colors = [
      'green', 'blue', 'yellow', 'red'
    ]
    return (
      <myContext.Provider value={colors} >
        <ColorBox />
      </myContext.Provider>
    );
  }
}
export default App;
