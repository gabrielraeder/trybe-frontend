import { useContext } from 'react';
import './App.css';
import Context from './context/Context';

function App() {
  const { email, setEmails } = useContext(Context);

  const allRead = () => {
    setEmails(email.map((e) => ({ ...e, status: 1 })))
  }

  const allUnread = () => {
    setEmails(email.map((e) => ({ ...e, status: 0 })))
  }

  const readOneEmail = (id) => {
    setEmails(email.map((e) => e.id === id ? { ...e, status: 1 } : e))
  }

  const unreadOneEmail = (id) => {
    setEmails(email.map((e) => e.id === id ? { ...e, status: 0 } : e))
  }

  return (
    <div className="App">
      <button onClick={allRead} type="button">
        Marcar todos como lidos
      </button>
      <button onClick={allUnread} type="button">
        Marcar todos como não lidos
      </button>

      <ul>
        { email.map((e) => (
          <fieldset>
            <li>
              <p>{e.title}</p>
              {e.status === 1 && <h5>LIDO</h5> }
              <button onClick={() => readOneEmail(e.id)}>Marcar Lido</button>
              <button onClick={() => unreadOneEmail(e.id)}>Marcar Não Lido</button>
            </li>
          </fieldset>
        ))}
      </ul>

    </div>
  );
}

export default App;
