import logo from './logo.svg';
import './App.css';
// Importacion del componente Header
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
      {/* Llamado a componente Header el cual se convierte a un elemento JSX */}
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo con React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>
    </div>
  );
}

export default App;
