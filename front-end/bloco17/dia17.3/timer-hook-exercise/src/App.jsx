import useTimer from './hooks/useTimer';

function App() {
  const { timer, randomNumber, bingo } = useTimer();

  

  return (
    <div className="App">
      <h4>
      Timer: {timer}
      </h4>
      <h2>
        Random: {randomNumber}
      </h2>
      <h1>
        { bingo && 'BINGO!'}
      </h1>
      
    </div>
  );
}

export default App;
