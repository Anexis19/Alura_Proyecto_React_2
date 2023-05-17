import "./campoTexto.css"

// Definicion de funcion JS que debe retornar un elemento HTML
const CampoTexto = () =>{

    return <div className="campo-texto">
        <label>Nombre</label>
        <input type="text" placeholder="Ingresar Nombre" />
    </div>
}
// Exportacion de componente CampoTexto
export default CampoTexto