import './footer.css'

export const Footer = ({path, setPath}) => {
    return(
        <footer className='footer'>
            <div className='footer__links'>
                <p id={path == "/Home" || path == "/" || path == ""  ? "whiteColor" : ""}>Inicio</p>
                <p id={path == "/AboutMe" ? "whiteColor" : ""}>¿Quien soy?</p>
                <p id={path == "/Works" ? "whiteColor" : ""}>Trabajos</p>
                <p id={path == "/ContactMe" ? "whiteColor" : ""}>Contacto</p>
            </div>
        </footer>
    )
}