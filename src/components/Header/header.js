import "./header.css"

// La creacion de los componentes por convencion, la primera letra debe ser en mayuscula
function Header(){

    // Un componente de React se caracteriza por ser una funcion JS que retorna un elemento HTML
    return <header className="header">
        {/* Un elemento siempre sebe estar almacenado por una etiqueta padre */}
        <img src='img/header.png' alt='Erro al cargar la imagen del componente Header' />
    </header>

}
// Exportacion del componente
export default Header