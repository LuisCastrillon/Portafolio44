import './contactMe.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import message from '../assets/burbuja-de-dialogo.png';
import phone from '../assets/telefono.png';
import ubi from '../assets/marcador-de-posicion.png';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(text.user_name != "" && text.user_email != ""  && text.message != ""){
      emailjs
      .sendForm('service_74xw8ea', 'template_6v4igb9', form.current, {
        publicKey: 'usrNL_GnPXTogrWCC',
      })
      .then(
        () => {
          setText({
            user_name: '',
            user_email: '',
            message: ''
          })
          setEmpty(false)
          setSended(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
          
        },
      );
    }else{
      setEmpty(true)
    }

    
  };

  //Animaciones
  const props = useSpring({
    from: { transform: 'scale(0.5)' }, 
    to: { transform: 'scale(1)' }, 
    config: { tension: 200, friction: 100 } 
  });

  //Formulario
  const [text, setText] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })
const [empty, setEmpty] = useState(false);
const [sended, setSended] = useState(false);

  return (
    <div className='contact'>
    <div className='contact__ContactInf'>
        <h3>INFORMACION DE CONTACTO</h3>
        <animated.div style={props} className='contact__ContactInf__card'>
            <div className='contact__ContactInf__card__imgCnt'>
                <img src={message} alt="" />
            </div>
            <div className='contact__ContactInf__card__inf'>
                <p className='contact__ContactInf__card__inf--color'>CORREO</p>
                <p>luisfcastrillonalvarez@gmail.com</p>
            </div>
        </animated.div>
        <animated.div style={props} className='contact__ContactInf__card'>
            <div className='contact__ContactInf__card__imgCnt' >
                <img src={phone} alt="" />
            </div>
            <div className='contact__ContactInf__card__inf'> 
                <p className='contact__ContactInf__card__inf--color'>TELÉFONO</p>
                <p>3052169307</p>
            </div>
        </animated.div>
        <animated.div style={props} className='contact__ContactInf__card'>
            <div className='contact__ContactInf__card__imgCnt'>
                <img src={ubi} alt="" />
            </div>
            <div className='contact__ContactInf__card__inf'>
                <p className='contact__ContactInf__card__inf--color'>UBICACIÓN</p>
                <p>Medellín, Buenos Aires</p>
            </div>
        </animated.div>
    </div>
    <animated.form style={props} className='contact__form' ref={form} onSubmit={sendEmail}>
    <div className="icon1--left"></div>
        <h1>¡Contactame!</h1>
        <input value={text.user_name} className='contact__form--input' id={empty ? "inputEmpty" : "" || sended ? "sended" : ""} onChange={(e) => {setText({...text, user_name: e.target.value})}} placeholder='Nombre *' type="text" name="user_name" />
        <input value={text.user_email} className='contact__form--input' id={empty ? "inputEmpty" : ""|| sended ? "sended" : ""} onChange={(e) => {setText({...text, user_email: e.target.value})}} placeholder='Email *' type="email" name="user_email" />
        <input value={text.message} className='contact__form--input contact__form--input--height' id={empty ? "inputEmpty" : "" || sended ? "sended" : ""} onChange={(e) => {setText({...text, message: e.target.value})}} placeholder='Mensaje *' name="message" />
        <input className='contact__form--button' type="submit" value="Enviar :)" />
    </animated.form>
    </div>
  );
};