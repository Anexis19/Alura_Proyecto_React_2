import './App.css';
// Importacion del componente Header
import Header from './components/Header/header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';

// Definicion de componente Padre. Componente APP es el componente principal
function App() {
  return (
    <div>
      {/* Llamado a componente Header el cual se convierte a un elemento JSX */}

      <Header></Header>
      <Formulario></Formulario>
      <MiOrg></MiOrg>

    </div>
  );
}

export default App;
