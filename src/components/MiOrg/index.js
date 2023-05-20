import { useState } from "react"
import "./MiOrg.css"


const MiOrg =() =>{

    // Estado - Hooks
    /*
        useState = Usar el estado
        Funcion que recibe como parametro, el valor inicial de un estado
        El cual retorna dos elementos

        const [nombreVariable, funcionActualiza] = useState(valorInicial)
    */

    // La variable mostrar, tiene un estado inicial de TRUE
    const [mostrar,actualizarMostrar] = useState(true)

    // Funcion manejarClick que realiza la actualizacion del estado de la vartiable MOSTRAR
    const manejarClick = () =>{
        console.log("Mostrar/Ocultar", !mostrar);
        // Actualizacion de Estado. Pasa de TRUE a FALSE y de FALSE a TRUE
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
            <h3 className="title">Mi Organización</h3>
            {/* Se le agrega la propiedad onClick la cual, al ejecutarse el evento click
                manda a llamar la funcion manejarClick
            */}
            <img src="/img/add.png" alt="Error al cargar el boton add" onClick={manejarClick}/>
    </section>
}
export default MiOrg