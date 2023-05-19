// Importacion de Archivo CSS
import "./formulario.css"
import CampoTexto from "../CampoTexto/"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

// Creacion de arrow function
const Formulario = () =>{
    // Recordar que un componente se conoce como una funcion JS que retorna un elemento HTML
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            {/* Uso del componente CampoTexto importado */}
            {/* Se define una props titulo, la cual es enviada y usada al componente como un OBJETO */}
            <CampoTexto titulo = "Nombre" placeholder = "Ingresa el nombre"></CampoTexto>
            <CampoTexto titulo = "Puesto" placeholder = "Ingresa el puesto"></CampoTexto>
            <CampoTexto titulo = "Foto"   placeholder = "Ingresa enlace de la foto"></CampoTexto>
            <ListaOpciones></ListaOpciones>
            {/* Siempre que haya la posibilidad, se deben enviar texto usando PROPS */}
            <Boton texto="Crear Colaborador"></Boton>
        </form>
    </section>
}
// Exportacion del componente
export default Formulario