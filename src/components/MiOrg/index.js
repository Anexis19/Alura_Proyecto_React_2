import "./MiOrg.css"

// Preparacion de componente que recibira las propiedades el componente PADRE, en este caso APP.js
const MiOrg =(props) =>{

    // Estado - Hooks
    /*
        useState = Usar el estado
        Funcion que recibe como parametro, el valor inicial de un estado
        El cual retorna dos elementos

        const [nombreVariable, funcionActualiza] = useState(valorInicial)
    */




    return <section className="orgSection">
            <h3 className="title">Mi Organización</h3>
            {/* Se le agrega la propiedad onClick la cual, al ejecutarse el evento click
                manda a llamar la funcion manejarClick
            */}
            <img src="/img/add.png" alt="Error al cargar el boton add" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg