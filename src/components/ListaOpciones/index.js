import './ListaOpciones.css'

const ListaOpciones = () =>{

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

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select>

            {/* Metodo MAP que recorre el arreglo de equipos
                Recibe como argumentos el arreglo y el indice.

                USAR el metodo MAP siempre que se hagan arreglos

                El colocar llaves en medio de un archivo React,
                significa que se hara uso de JAVASCRIPT y por ende, retornaremos
                lenguaje HTML
            */}

            { equipos.map((equipo,index)=>{
                // En este caso se esta enviando la propiedad Key, la cual en este caso, debe ser unica
                return <option value="" key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones