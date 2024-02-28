import { useSpring, animated } from 'react-spring';
import './gcbWork.css'
import w0 from '../assets/w1.png'
import w1 from '../assets/w3.png'
export const GcbWork2 = () => {

    const workData = {
        img1: w0,
        img2: w1,
        aboutProyect:"Weather es una página web sencilla que brinda la posibilidad de visualizar una variedad de datos meteorológicos para distintas ciudades de los Estados Unidos. Estos datos incluyen el clima, la velocidad y dirección del viento, así como la temperatura en grados Celsius y Fahrenheit. Lo destacable de esta pagina Web es su presentación creativa de los datos, utilizando una combinación de colores e imágenes diseñadas para facilitar la comprensión y ofrecer una experiencia visualmente agradable para los usuarios.",
        myWorkOnProyect:"Este mini-proyecto surgió con el propósito de poner a prueba y perfeccionar mis habilidades en el framework o biblioteca React, del lenguaje de programación JavaScript. Mediante esta experiencia, buscaba consolidar mis conocimientos y habilidades prácticas en el desarrollo web, principalmente el consumo de una API (en este caso la API consumida gratuitamente fue OpenWeather) mientras brindaba a los usuarios una herramienta útil para mantenerse informados sobre las condiciones meteorológicas actuales.",
        devInformation:"Tecnologías utilizadas: React.js, Node.js, HTML5, CSS3 y JavaScript. Este proyecto fue creado con el propósito de consolidar y aplicar los diversos conocimientos y conceptos que he adquirido en el desarrollo con React. Durante su creación, resultó fundamental comprender los conceptos básicos de la biblioteca, tales como el manejo de estados, la renderización condicional,desarrollo de componentes, el consumo de API, entre otros aspectos. Esta experiencia me permitió fortalecer mis habilidades prácticas y profundizar en la comprensión de React como un marco de desarrollo flexible y potente."
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