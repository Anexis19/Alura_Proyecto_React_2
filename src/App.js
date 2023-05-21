import './App.css';
// Importacion del componente Header
import Header from './components/Header/header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';

// Importacion de useState de React
import { useState } from 'react';


// Definicion de componente Padre. Componente APP es el componente principal
function App() {
  // Creacion de estado
  const [mostrarFormulario, actualizarFormulario] = useState(false)

  /*
  Creacion de funcion que cambia el estado de mostrarFormulario. Esta funcion es enviada como PROP (PROPIEDAD)
  al componente MiOrg el cual tiene el elemento img que llamara al evento onClick y a su vez cambiara el estado
  en que se encuentra la variable seleccionada
  */
  const cambiarMostrar = () =>{
    actualizarFormulario(!mostrarFormulario)
  }

  // Arreglo de objetos que contiene el nombre del equipo, el color primario y el color secundario
  const equipos = [
    {
      titulo:"Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E1"
    },
    {
      titulo:"DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo:"Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
   ]




  return (
    <div>
      {/* Llamado a componente Header el cual se convierte a un elemento JSX */}
      <Header></Header>

      {/* Aplicacion de operador Ternario que evalua el estado de mostrarFormulario */}
      { mostrarFormulario === true ? <Formulario></Formulario> : <></>}

      <MiOrg cambiarMostrar = {cambiarMostrar}></MiOrg>

      {
        // Instruccion que permite recorrer el arreglo de equipos y ejecuta un bloque de codigo. Siempre es necesario tener una KEY unica
        equipos.map( (equipo)=>{
          return <Equipo datos={equipo} key={equipo.titulo}></Equipo>
        } )
      }

    </div>
  );
}

export default App;
