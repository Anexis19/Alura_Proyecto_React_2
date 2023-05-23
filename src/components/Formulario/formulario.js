// Importacion de Archivo CSS
import "./formulario.css"
import CampoTexto from "../CampoTexto/"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import { useState } from "react"

// Creacion de arrow function
const Formulario = (props) =>{

    /*
        Creacion de eventos que controlaran los componentes inputs.
        Las variables se enviaran como propiedades
    */
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, acutalizarEquipo] = useState("")

    // Destructuracion de la propiedad registrarColaborador
    const {registrarColaborador} = props



    // Transformacion y lectura de datos para establecer un SPA (Single Page Application). Evitando la sobrecarga
    const manejarEnvio = (e) =>{
        // Evento que evita la recarga una vez se dispara el evento
        e.preventDefault()
        console.log("Control del envio");

        // Creacion de objeto que recibe y envia los datos provenientes de los estados
        let datosEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo

        }
        registrarColaborador(datosEnviar)

    }


    // Recordar que un componente se conoce como una funcion JS que retorna un elemento HTML
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            {/* Uso del componente CampoTexto importado */}
            {/* Se define una PROPS titulo, la cual es enviada y usada al componente como un OBJETO

                Ademas se crea una PROP required, la cual, al ser recibida en el componente, es administrada
                internamente

                Envio de las variables correspondientes a los eventos y su valor inicial
            */}
            <CampoTexto
                titulo = "Nombre"
                placeholder = "Ingresa el nombre"
                required
                valor = {nombre}
                actualizar = {actualizarNombre}
            ></CampoTexto>
            <CampoTexto
                titulo = "Puesto"
                placeholder = "Ingresa el puesto"
                required
                valor = {puesto}
                actualizar = {actualizarPuesto}
            ></CampoTexto>
            <CampoTexto
                titulo = "Foto"
                placeholder = "Ingresa enlace de la foto"
                required
                valor = {foto}
                actualizar = {actualizarFoto}
            ></CampoTexto>
            <ListaOpciones
                valor = {equipo}
                actualizar = {acutalizarEquipo}
                equipos = {props.equipos}
            ></ListaOpciones>
            {/* Siempre que haya la posibilidad, se deben enviar texto usando PROPS */}
            <Boton texto="Crear Colaborador"></Boton>
        </form>
    </section>
}
// Exportacion del componente
export default Formulario