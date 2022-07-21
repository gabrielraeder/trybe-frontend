import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      botão1: 0,
      botão2: 0,
      botão3: 0
    }

    this.firstClick = this.firstClick.bind(this)
    this.secondClick = this.secondClick.bind(this)
    this.thirdClick = this.thirdClick.bind(this)
  }

  firstClick(conta) {
    this.setState((estadoAnterior, _props) => ({
      botão1: estadoAnterior.botão1 + 1
    }))
    const btnColor = document.getElementById('btn1')
    btnColor.style.backgroundColor = 'green'
    if (conta % 2 === 0) {
      btnColor.style.backgroundColor = 'red'
    }
    console.log(`Cor 1 = ${btnColor.style.backgroundColor}`);
  }

  secondClick(conta) {
    this.setState((estadoAnterior, _props) => ({
      botão2: estadoAnterior.botão2 + 1
    }))
    const btnColor = document.getElementById('btn2')
    btnColor.style.backgroundColor = 'green'
    if (conta % 2 === 0) {
      btnColor.style.backgroundColor = 'red'
    }
    console.log(`Cor 2 = ${btnColor.style.backgroundColor}`);
  }

  thirdClick(conta) {
    this.setState((estadoAnterior, _props) => ({
      botão3: estadoAnterior.botão3 + 1
    }))
    const btnColor = document.getElementById('btn3')
    btnColor.style.backgroundColor = 'green'
    if (conta % 2 === 0) {
      btnColor.style.backgroundColor = 'red'
    }
    console.log(`Cor 3 = ${btnColor.style.backgroundColor}`);
  }
  
  render() {
    return (
      <div className="App">
        <button id='btn1' onClick={ () => this.firstClick(this.state.botão1) }>{`Click => ${this.state.botão1}`}</button>
        <button id='btn2' onClick={ () => this.secondClick(this.state.botão2) }>{`Click => ${this.state.botão2}`}</button>
        <button id='btn3' onClick={ () => this.thirdClick(this.state.botão3) }>{`Click => ${this.state.botão3}`}</button>
      </div>
    );
  }
}

export default App;
