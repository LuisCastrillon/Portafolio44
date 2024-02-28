import { useSpring, animated } from 'react-spring';
import './gcbWork.css'
import sp from '../assets/sp1.png'
import sp0 from '../assets/sp0.png'
import sp1 from '../assets/sp00.png'
export const GcbWork1 = () => {

    const workData = {
        img1:sp,
        img2:sp1,
        aboutProyect:'El proyecto de "Gestión Integral de Personal y Tickets", es  una aplicación de escritorio desarrollada en C# mediante la potente tecnología de Windows (WPF). Este proyecto surge como respuesta a la creciente necesidad de optimizar los procesos internos de las organizaciones, centrándose en la gestión eficiente de recursos humanos y la resolución ágil de incidencias a través de un sistema de tickets inteligente. La finalidad principal de esta aplicación es abordar dos aspectos fundamentales: la gestión eficiente de recursos humanos y la resolución ágil de incidencias mediante un sistema de tickets.',
        myWorkOnProyect:"Mi contribución a la creación de SupporTech fue crucial. Para desarrollar el sistema SupporTech en el entorno de escritorio de Windows, me enfrenté al desafío de utilizar el lenguaje de programación C#, aprovechando la tecnología Windows Presentation Foundation (WPF). El proyecto ha logrado cumplir su objetivo principal: registrar y gestionar eficientemente los tickets, así como también administrar los recursos humanos de manera efectiva. Además, también desempeñé un papel fundamental en el diseño y la creación de la base de datos relacionales, utilizando SqlServer como plataforma principal.",
        devInformation:"Entre las tecnologías utilizadas destacan el lenguaje de programación C#, el Gestor de Bases de Datos SqlServer, el framework .NET y la tecnología Windows Presentation Foundation (WPF). Esta elección se realizó con el objetivo específico de crear un sistema robusto y eficiente que funcionara en el entorno de escritorio de Windows. La elección de Windows Presentation Foundation (WPF) como tecnología de interfaz de usuario fue fundamental para garantizar una experiencia de usuario intuitiva y atractiva. WPF ofrece capacidades avanzadas de diseño y renderización gráfica, lo que me permitió crear una interfaz de usuario moderna y altamente funcional."
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
                    <p>2023</p>
                    <p className='work__devInf__div--color'>Tiempo</p>
                    <p>2 Meses</p>
                    <p className='work__devInf__div--color'>Entorno</p>
                    <p>Windows</p>
                </animated.div>
                <animated.div style={props} className="work__inf__div">
                    <h3>INFORMACION DE DESARROLLO</h3>
                    <p>{workData.devInformation}</p>
                </animated.div>
            </div>
        </div>
    )
}