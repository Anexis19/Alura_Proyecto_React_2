import "./colaboradores.css"

const Colaborador = (props) =>{

    // Aplicacion de destructuracion para el manejo de propiedades
    const {nombre, puesto, foto} = props.datos

    return <div className="contenedorColaborador">

        <div className="contenedorEncabezado">
            <img src={foto} alt="Error al cargar la imagen" />
        </div>
        <div className="contenedorInfo">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador