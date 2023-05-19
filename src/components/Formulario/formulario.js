// Importacion de Archivo CSS
import "./formulario.css"
import CampoTexto from "../CampoTexto/"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

// Creacion de arrow function
const Formulario = () =>{

    // Transformacion y lectura de datos para establecer un SPA (Single Page Application). Evitando la sobrecarga
    const manejarEnvio = (e) =>{
        // Evento que evita la recarga una vez se dispara el evento
        e.preventDefault()
        console.log("Control del envio", e);
    }


    // Recordar que un componente se conoce como una funcion JS que retorna un elemento HTML
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            {/* Uso del componente CampoTexto importado */}
            {/* Se define una PROPS titulo, la cual es enviada y usada al componente como un OBJETO

                Ademas se crea una PROP required, la cual, al ser recibida en el componente, es administrada
                internamente
            */}
            <CampoTexto titulo = "Nombre" placeholder = "Ingresa el nombre" required></CampoTexto>
            <CampoTexto titulo = "Puesto" placeholder = "Ingresa el puesto" required></CampoTexto>
            <CampoTexto titulo = "Foto"   placeholder = "Ingresa enlace de la foto" required></CampoTexto>
            <ListaOpciones></ListaOpciones>
            {/* Siempre que haya la posibilidad, se deben enviar texto usando PROPS */}
            <Boton texto="Crear Colaborador"></Boton>
        </form>
    </section>
}
// Exportacion del componente
export default Formulario