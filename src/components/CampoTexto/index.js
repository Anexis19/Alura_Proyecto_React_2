import "./campoTexto.css"

// Definicion de funcion JS que debe retornar un elemento HTML

// Las props son datos que pueden ser enviadas al interior de un componente cuando son invocados.
// El dato enviado se comporta como un objeto en el componente

// Recepcion del parametro correspondiente a las propiedades del elemento. props = propiedades
const CampoTexto = (props) =>{

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input type="text" placeholder={props.placeholder} />
    </div>
}
// Exportacion de componente CampoTexto
export default CampoTexto