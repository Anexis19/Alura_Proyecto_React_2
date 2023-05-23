
import "./equipo.css"
import Colaborador from "../Colaboradores";

const Equipo = (props) =>{

    // Destructuracion. Se aplica para evitar la repeticion de codigo que en algunos casos puede ser simplificado
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const {colaboladores} = props;

    // Se Agregan estilo en Linea, diferenciado en que el comportamiento se da como un objeto y se pasa la PROP definida
    return <section className="contenedorEquipo" style={{backgroundColor: colorSecundario}}>

        {/* Se Agregan estilos en Linea, diferenciado en que el comportamiento se da como un objeto y se pasa la PROP definidad */}
        <h3 style={{borderColor: colorPrimario }}>{titulo}</h3>

        <div className="contenedorColaboladores">

            {/* IMPORTACION DE COMPONENTE COLABORADORES */}
            {

                // En la linea 9 se realizo la destructuracion de la PROP enviada desde el PADRE APP. Esta PROP contenia
                // el array con colaboladores registrado. Se realiza el recorrido del Array y se envia mediante PROPS, los datos
                // al hijo COLABORADORES, que en este caso, actuara de forma dinamica con los datos recibidos
                colaboladores.map((colaborador, index) =>{
                    return <Colaborador
                        datos = {colaborador}
                        key = {index}
                    ></Colaborador>
                })
            }
        </div>
    </section>
}
export default Equipo