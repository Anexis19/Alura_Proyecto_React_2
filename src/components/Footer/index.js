import "./footer.css"


const Footer = () =>{

    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}} >
        <div className="redes">
            <a href="https://www.aluracursos.com/">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/favicon.png" alt="Logo ORG" />
        <strong>Desarrollado por Andres Hurtado</strong>

    </footer>
}
export default Footer