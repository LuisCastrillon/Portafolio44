import { useSpring, animated } from 'react-spring';
import yo from '../assets/yo2.jpg'
import './aboutMe.css'

export const AboutMe = () => {


    //Animaciones
    const props = useSpring({
        from: { transform: 'scale(0.5)' }, 
        to: { transform: 'scale(1)' }, 
        config: { tension: 200, friction: 100 } 
      });

    return(
        <>
        <div className='About1'>
            <animated.div style={props} className='About__imgCnt'>
                <img src={yo} alt="" />
            </animated.div>
            <div className='About__inf'>
                <h1>CONÓCEME</h1>
                <animated.div style={props} className='About__aboutMe'>
                    <div className="icon"></div>
                    <h2>Un poco de mi</h2>
                    <p>Soy un Analista y Desarrollador de Software apasionado por descubrirme cada día, explorar y desarrollar mis habilidades y conocimientos en cada nuevo desafío. Con una pasión por explorar nuevas ideas y experimentar con nuevas tecnologías, siempre buscando superar mis límites.</p>
                </animated.div>
            </div>
            
        </div>
        <animated.div style={props} className='About2'>
            <h2>MI OBJETIVO...</h2>
            <p>
                Soy un joven de 20 años apasionado por el mundo del arte, la tecnología y los videojuegos. Personalmente, siempre me ha gustado el mundo de los videojuegos debido a que cada uno es un mundo nuevo por explorar. Hace años, hubo un momento en el que quise construir mi propio mundo dentro de un videojuego, pero lamentablemente, en ese entonces no tenía las herramientas ni la curiosidad necesaria para empezar a desarrollarlo, y en ese momento pensé que el mundo de la programación y el desarrollo de videojuegos no era para mí. Justamente ese momento es el que me motiva a alcanzar la meta que siempre he deseado: desarrollar mi propio videojuego, aunque todavía estoy en el proceso.
                <br></br><br></br>
                Mi carrera como programador empezó cuando tuve la oportunidad de estudiar en una Tecnología como Analista y Desarrollador de Software. Los conocimientos y habilidades que he adquirido desde entonces han sido numerosos. Sin embargo, cada nuevo concepto que aprendo en el ámbito del desarrollo de software me hace consciente de lo mucho que aún me queda por descubrir en el mundo de la programación.
            </p>   
        </animated.div>
        </>
    )
}