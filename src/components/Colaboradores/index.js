import "./colaboradores.css"

const Colaborador = (props) =>{

    // Aplicacion de destructuracion para el manejo de propiedades
    const {nombre, puesto, foto} = props.datos

    // Aplicacion de destructuracion para el manejor de propiedades
    const {colorPrimario } = props

    return <div className="contenedorColaborador">

        <div className="contenedorEncabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt="Error al cargar la imagen" />
        </div>
        <div className="contenedorInfo">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador