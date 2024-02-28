import yo from '../assets/yo0.jpg'
import './stack.css'
import wpp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import { useSpring, animated } from 'react-spring';
import linkedin from '../assets/linkedin.png'
import { useNavigate } from 'react-router-dom';

export const Stack = () =>{
    const navigate = useNavigate()

    const tools = [{
        porcentaje:"93%",
        tool: "React",
        description:"Creacion de interfaces interativas"
    },
    {
        porcentaje:"85%",
        tool: "Node JS",
        description:"Construcción de aplicaciones Back-end"
    },
    {
        porcentaje:"84%",
        tool: "C#",
        description:"Desarrollo de Apps en entorno Windows"
    },
    {
        porcentaje:"93%",
        tool: "JavaScript",
        description:"Construcción de aplicaciones web"
    },
    {
        porcentaje:"78%",
        tool: "PHP",
        description:"Desarrollo web y creacion de sitios dinamicos"
    },
    {
        porcentaje:"97%",
        tool: "CSS3",
        description:"Creacion de interfaces interativas"
    },
    {
        porcentaje:"99%",
        tool: "HTML5",
        description:"Creacion de sitios modernos y responsivos"
    },
    {
        porcentaje:"90%",
        tool: "SQL",
        description:"Gestion de bases de datos relacionales"
    },
    {
        porcentaje:"87%",
        tool: "GIT",
        description:"Controlador de versiones y trabajo en equipo"
    },
    {
        porcentaje:"72%",
        tool: "Figma",
        description:"Elaboracion de prototipos"
    }

]

const props = useSpring({
    from: { transform: 'scale(0.5)' }, // Escala inicial del componente
    to: { transform: 'scale(1)' }, // Escala final del componente
    config: { tension: 200, friction: 100 } // Configuración de la física del muelle
  });
    return(
        <div className='stack'>
            <div>
            <animated.div style={props}  className='stack__imgCnt'>
                <div className='stack__imgCnt__img'>
                    <img src={yo} alt="" />
                </div>
                <h1>Luis Castrillon</h1>
                <p>@Filigior</p>
                <div className='stack__imgCnt__linksCnt'> 
                    <a target='_blank' href='https://wa.me/3052169307' className='stack__imgCnt__linksCnt__linkDiv'><img src={wpp} alt="" /></a>
                    <a target='_blank' href='https://www.instagram.com/filigior/' className='stack__imgCnt__linksCnt__linkDiv'><img src={instagram} alt="" /></a>
                    <a target='_blank' href='https://www.linkedin.com/in/luis-fernando-castrillon-alvarez-60065423a' className='stack__imgCnt__linksCnt__linkDiv'><img src={linkedin} alt="" /></a>
                </div>
                <button onClick={() => {navigate("../ContactMe")}}>¡Escribeme!</button>

            </animated.div>
            </div>
            <div className='stack__inf'>
                <animated.h3 style={props}>MAS INFORMACION</animated.h3>
                <animated.p style={props}>
                    Analista y Desarrollador de Software apasionado por el mundo del desarrollo y la programación. Mis primeros pasos como programador fueron en el desarrollo de aplicaciones web Front-end. Poco después, me vi en la necesidad de conectar diferentes sistemas y bases de datos, lo que me llevó a investigar más sobre el desarrollo Back-end. Opté por aprender C# como mi lenguaje de desarrollo Back-end para dar mis primeros pasos como desarrollador en esta área.
                </animated.p>
                <div className='stack__inf__cardCmp'>
                    <animated.h3  style={props} className='cardCmp__title'>TECNOLOGIAS</animated.h3>
                    <div className='stack__inf__cardCmp1'> 
                    {tools.map((element, index) => (
                        <animated.div style={props}  key={index} className='stack__inf__cardCmp__card'>
                            <p>{element.porcentaje}</p>
                            <h3>{element.tool}</h3>
                            <p>{element.description}</p>
                        </animated.div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}