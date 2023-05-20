import "./campoTexto.css"


// Definicion de funcion JS que debe retornar un elemento HTML

// Las props son datos que pueden ser enviadas al interior de un componente cuando son invocados.
// El dato enviado se comporta como un objeto en el componente

// Recepcion del parametro correspondiente a las propiedades del elemento. props = propiedades
const CampoTexto = (props) =>{



    // Funcion que recibe el elemento onChange, a su vez llama a la propiedad target y al value
    const manejarCambio = (e) =>{
        // Actualizacion de la variable que fue enviada mediante PROPS
        props.actualizar(e.target.value)
        // console.log("Prueba de control de inputs ",e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        {/* Se reciben los valores de las PROPS provenientes del componente PADRE que es
            el formulario. De igual manera, si no se ingresa esta propiedad, el campo deja de
            ser obligatorio
        */}
        <input
            type="text"
            placeholder={props.placeholder}
            required={props.required}

            // Llamado a PROP valor enviada desde el componente formulario
            value = {props.valor}
            // La propiedad onChange detecta los cambios realizados en el input
            onChange={manejarCambio}
        />
    </div>
}
// Exportacion de componente CampoTexto
export default CampoTexto