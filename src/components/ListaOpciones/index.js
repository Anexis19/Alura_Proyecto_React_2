import './ListaOpciones.css'

const ListaOpciones = (props) =>{

    // Arreglo de String que menciona cada uno de los equipos
    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]


    const manejarCambio = (e) =>{
        // Actualizacion de variable del estado
        props.actualizar(e.target.value)
    }

    return <div className='lista-opciones'>
        <label>Equipos</label>

        {/* Se le asignar el valor proveniente del estado del Equipo, en este caso inicial,
        se encuentra vacio, en caso de presentarse un cambio, llama a la funcion
        manejarCambio, el cual actualiza el la variable valor y por ende, cambia
        lo que se muestra como valor en el elemento SELECT */}
        <select value={props.valor} onChange={manejarCambio}>

            {/* Opcion invisible pro defecto */}
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>

            {/* Metodo MAP que recorre el arreglo de equipos
                Recibe como argumentos el arreglo y el indice.

                USAR el metodo MAP siempre que se hagan arreglos

                El colocar llaves en medio de un archivo React,
                significa que se hara uso de JAVASCRIPT y por ende, retornaremos
                lenguaje HTML
            */}

            { equipos.map((equipo,index)=>{
                // En este caso se esta enviando la propiedad Key, la cual en este caso, debe ser unica y por ende, toma el valor del iterador index
                return <option value={equipo} key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones