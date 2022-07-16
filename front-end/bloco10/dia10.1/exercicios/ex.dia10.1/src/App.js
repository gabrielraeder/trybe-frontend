import './App.css';

const Task = (values) => {
  return (
    values.map((value) => <li>{value}</li>)
  );
}

const arr = ['Acordar', 'Comer', 'Escovar Dentes', 'Estudar', 'Estudar'];

function App() {
  return Task(arr);
}

export default App;
