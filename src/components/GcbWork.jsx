import { useSpring, animated } from 'react-spring';
import './gcbWork.css'
import gcb0 from '../assets/gcb0.png'
import gcb1 from '../assets/gcb1.png'
export const GcbWork = () => {

    const workData = {
        img1:gcb0,
        img2:gcb1,
        aboutProyect:"Gestor de Citas para una Barberia (GCB) fue un proyecto realizado con el objetivo de aplicar todos los conocimientos adquiridos en el transcurso de la Tecnologia Analisis y Desarrollo de Software. Este proyecto permitio a los propietarios de la barberia exhibir a sus clientes diferente informacion relevante acerca de la barberia como por ejemplo: Informacion pertinente acerca de los servicios que la barberia brinda, una galeria de los servicios brindados a diferentes clientes, entre otros. Además, permitió a los clientes de la barberia la opcion de poder pedir y reservar una cita o varios de los diferentes servicios que la barberia brinda de forma online.",
        myWorkOnProyect:"Mi compromiso y habilidades fueron fundamentales para llevar a cabo esta plataforma de Gestión de Citas de manera exitosa. Tener conocimiento de diferentes tecnologías y herramientas fue fundamental para poder llevar a cabo este proyecto. Fui el encargado de crear los diseños interactivos mediante prototipos para el Front-end de la página web. Esto permitió a los usuarios navegar por el sistema sin ningún tipo de dificultad, interactuando fácilmente entre los diferentes componentes o servicios que el proyecto brinda. Además, me encargué de crear completamente el backend y de configurar el servidor para un buen desempeño del sistema.",
        devInformation:"Tecnologías utilizadas: React.js, Node.js, MySQL, HTML5, CSS3, JavaScript, Express.js. La elección de estas tecnologías permitió la creación de un sistema completo y funcional. React.js y Node.js posibilitaron la creación de interfaces de usuario dinámicas y de alto rendimiento, mientras que MySQL garantizó la gestión eficiente de datos. La implementación de Express.js permitió la construcción de un backend sólido y escalable. La planificación, el diseño y la programación exhaustiva tanto en el front end como en el backend demandaron un mes de dedicación intensiva. Además, la inclusión de pruebas de seguridad y la creación del sistema implicaron un esfuerzo sustancial."
    }

    //animaciones
    const props = useSpring({
        from: { transform: 'scale(0.5)' }, // Escala inicial del componente
        to: { transform: 'scale(1)' }, // Escala final del componente
        config: { tension: 200, friction: 100 } // Configuración de la física del muelle
      });
    return(
        <div className='work'>
            <animated.h1 style={props}>RESUMEN DEL PROYECTO</animated.h1>
            <animated.div style={props} className='work__imgCnt'><img src={workData.img1} alt="" /></animated.div>
            <div className='work__inf'>
                <animated.div className="work__inf__div" style={props}>
                    <h3>¿DE QUE TRATA EL PROYECTO?</h3>
                    <p>{workData.aboutProyect}</p>
                </animated.div>
                <animated.div className="work__inf__div" style={props}>
                    <h3>MI TRABAJO EN EL PROYECTO</h3>
                    <p>{workData.myWorkOnProyect}</p>
                </animated.div>
            </div>
            <animated.div style={props} className='work__imgCnt'><img src={workData.img2} alt="" /></animated.div>
            <div className='work__inf work__devInf'>
                <animated.div style={props} className='work__devInf__div work__inf__div'>
                    <div className="icon1--left"></div>
                    <p className='work__devInf__div--color'>Year</p>
                    <p>2024</p>
                    <p className='work__devInf__div--color'>Tiempo</p>
                    <p>1 Mes</p>
                    <p className='work__devInf__div--color'>Entorno</p>
                    <p>Web</p>
                </animated.div>
                <animated.div style={props} className="work__inf__div">
                    <h3>INFORMACION DE DESARROLLO</h3>
                    <p>{workData.devInformation}</p>
                </animated.div>
            </div>
        </div>
    )
}