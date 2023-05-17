// Importacion de Archivo CSS
import "./formulario.css"
import CampoTexto from "../CampoTexto/"

// Creacion de arrow function
const Formulario = () =>{
    // Recordar que un componente se conoce como una funcion JS que retorna un elemento HTML
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            {/* Uso del componente CampoTexto importado */}
            <CampoTexto></CampoTexto>
            <CampoTexto></CampoTexto>
            <CampoTexto></CampoTexto>
            <CampoTexto></CampoTexto>
            <CampoTexto></CampoTexto>
            <CampoTexto></CampoTexto>
        </form>
    </section>
}
// Exportacion del componente
export default Formulario