import './App.css';
// Importacion del componente Header
import Header from './components/Header/header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';
// Importacion de useState de React
import { useState } from 'react';

// Definicion de componente Padre. Componente APP es el componente principal
function App() {
  // Creacion de estado
  const [mostrarFormulario, actualizarFormulario] = useState(true)

  /*
  Creacion de funcion que cambia el estado de mostrarFormulario. Esta funcion es enviada como PROP (PROPIEDAD)
  al componente MiOrg el cual tiene el elemento img que llamara al evento onClick y a su vez cambiara el estado
  en que se encuentra la variable seleccionada
  */
  const cambiarMostrar = () =>{
    actualizarFormulario(!mostrarFormulario)
  }



  return (
    <div>
      {/* Llamado a componente Header el cual se convierte a un elemento JSX */}

      <Header></Header>
      {/* Aplicacion de operador Ternario que evalua el estado de mostrarFormulario */}
      { mostrarFormulario === true ? <Formulario></Formulario> : <></>}
      <MiOrg cambiarMostrar = {cambiarMostrar}></MiOrg>

    </div>
  );
}

export default App;
