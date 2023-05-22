
import "./equipo.css"
import Colaborador from "../Colaboradores";

const Equipo = (props) =>{

    // Destructuracion. Se aplica para evitar la repeticion de codigo que en algunos casos puede ser simplificado
    const {colorPrimario, colorSecundario, titulo} = props.datos;

    // Se Agregan estilo en Linea, diferenciado en que el comportamiento se da como un objeto y se pasa la PROP definida
    return <section className="contenedorEquipo" style={{backgroundColor: colorSecundario}}>

        {/* Se Agregan estilos en Linea, diferenciado en que el comportamiento se da como un objeto y se pasa la PROP definidad */}
        <h3 style={{borderColor: colorPrimario }}>{titulo}</h3>

        <div className="contenedorColaboladores">

            {/* IMPORTACION DE COMPONENTE COLABORADORES */}
            <Colaborador></Colaborador>
            <Colaborador></Colaborador>
            <Colaborador></Colaborador>
            <Colaborador></Colaborador>
        </div>
    </section>
}
export default Equipo