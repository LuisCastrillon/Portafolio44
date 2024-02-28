import './home.css'
import yo from '../assets/yo0.jpg'
import code from'../assets/habilidades.png'
import skills from '../assets/cierre.png';
import wpp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import { useSpring, animated } from 'react-spring';
import { useNavigate, Outlet}  from "react-router-dom";
import { useState} from 'react';

export const Home = ({path, setPath}) => {

    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)
    const navigate = useNavigate();


    const socialMediaIcons = [wpp,linkedin, instagram ]


    //animaciones
    const props = useSpring({
        from: { transform: 'scale(0.5)' }, // Escala inicial del componente
        to: { transform: 'scale(1)' }, // Escala final del componente
        config: { tension: 200, friction: 100 } // Configuración de la física del 
    });


    return(
        <>
        <div className='homeComponents'>
            <animated.a onClick={() =>{ navigate("/AboutMe") ;setPath("/AboutMe");}}  style={props} className="me" onMouseEnter={() => {setHover1(!hover1);}} onMouseLeave={() => {setHover1(!hover1)}}>
                    <div className={hover1 ? "cmp cmp__hover" : "cmp"}></div>
                <div className='me__imgCnt'><img src={yo} alt="" /></div>
                <div className='me__inf'>
                    <p>PROGRAMADOR</p>
                    <h1>Luis Fdo. Castrillon</h1>
                    <p>"No tengo talentos especiales, pero sí soy profundamente curioso." - <em>Albert Einstein</em> </p>
                </div>
            </animated.a>
            <div className='skills'>
                    
                <animated.a onClick={() =>{navigate("/Stack");setPath("/Stack")}} style={props}className='skills__cmp' onMouseEnter={() => {setHover2(!hover2);}} onMouseLeave={() => {setHover2(!hover2)}}>
                    <div className={hover2? "cmp cmp__hover" : "cmp"}></div>
                    <div className='skills__cmp__imgCnt'><img src={code} alt="" /></div>
                    <p>CONOCE MIS</p>
                    <h2>Stacks</h2>
                </animated.a>
                <animated.a onClick={() =>{navigate("/Works");setPath("/Works")}} style={props} className='skills__cmp' onMouseEnter={() => {setHover3(!hover3);}} onMouseLeave={() => {setHover3(!hover3)}}> 
                    <div className={hover3? "cmp cmp__hover" : "cmp"}></div>
                    <div className='skills__cmp__imgCnt'><img src={skills} alt="" /></div>
                    <p>LIBRERIA DE</p>
                    <h2>Proyectos</h2>
                </animated.a>
            </div>
            
        </div>
        <animated.div onClick={() =>{setPath("/ContactMe")}}  style={props}className='skills__cmp skills__cmp--width' onMouseEnter={() => {setHover4(!hover4);}} onMouseLeave={() => {setHover4(!hover4)}}> 
            <div className={hover4? "cmp cmp__hover" : "cmp"}></div>
            <div className='skills__cmp__imgCnt skills__cmp__imgCnt--links'>
                {socialMediaIcons.map((element, index) => (
                    <a target="_blank"  key={index} className='skills__cmp__imgCnt--links__img' href={index == 0? "https://wa.me/3052169307" : index == 1 ? "https://www.linkedin.com/in/luis-fernando-castrillon-alvarez-60065423a" : index == 2 ? "https://www.instagram.com/filigior/" : ""}>
                        <img src={element} alt="" />
                    </a>
                ))}

            </div>
            <p>ENLACES DE</p>
            <h2>Contacto</h2>
        </animated.div>
        <Outlet/>
        </>
    )
}