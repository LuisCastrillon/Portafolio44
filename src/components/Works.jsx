import './works.css'
import yo from '../assets/yo2.jpg'
import sp2 from '../assets/sp2.png'
import gcb2 from '../assets/gcb2.png'
import w from '../assets/w2.png'
import { useSpring, animated } from 'react-spring';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Works = () => {

    const navigate = useNavigate();
    

    const [hover, setHover] = useState({
        0:false,
        1:false,
        2:false,
    })

    const handleMouseEnter = (index) => {
        setHover({ ...hover, [index]: true });
    };

    const handleMouseLeave = (index) => {
        setHover({ ...hover, [index]: false });

    };

    const works = [{
        img: gcb2,
        system: "SISTEMA WEB",
        title:"GCB"
    },
    {
        img: sp2,
        system: "WINDOWS APP",
        title:"SupportTech"
    },
    {
        img: w,
        system: "SISTEMA WEB",
        title:"Weather"
    }]

    //animaciones
    const props = useSpring({
        from: { transform: 'scale(0.5)' }, // Escala inicial del componente
        to: { transform: 'scale(1)' }, // Escala final del componente
        config: { tension: 200, friction: 100 } // Configuración de la física del muelle
      });

    return(
        <div className='wp'> 
            <animated.h1 style={props}>LIBRERIA</animated.h1>
            <div className='wp__cardCnt'>
                {works.map((element, index) => (
                    <animated.a  onClick={() => {index == 0 ? navigate("Gcb") : index == 1? navigate("Gcb1") : index == 2? navigate("Gcb2") : navigate("/Work")}} style={props} key={index} className='wp__cardCnt__card' onMouseEnter={() => {handleMouseEnter(index);}} onMouseLeave={() => {handleMouseLeave(index)}}>
                        <div className={hover[index] == true? "cmpW cmp__hoverW" : "cmpW"}></div>
                        <div>
                            <img src={element.img} alt="" />
                        </div>
                        <h3>{element.system}</h3>
                        <h2>{element.title}</h2>
                    </animated.a>
                ))}
            </div>
        </div>
    )
}