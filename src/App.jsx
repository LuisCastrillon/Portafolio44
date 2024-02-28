import './components/header.css'
import './App.css'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { AboutMe } from './components/AboutMe'
import { Link, BrowserRouter, Route, Routes }  from "react-router-dom";
import { useState } from 'react';
import { Works } from './components/Works'
import { Stack } from './components/Stack'
import { GcbWork } from './components/GcbWork'
import { GcbWork1 } from './components/GcbWork1'
import { GcbWork2 } from './components/GcbWork2'
import { ContactMe } from './components/ContactMe'


function App() {
const [menu, setMenu] = useState(false);
const [path, setPath] = useState("")

  return (
    <div className='page0'>
      <div className='page'>
        <BrowserRouter basename='/Portafolio_/'>
        <header className='header'>
            <h3>Luis Castrillon</h3>
            <nav className='header__links' id={menu ? "displayFlex":  ""}>
                <Link  onClick={() => {setPath("/Home"); menu == true? setMenu(!menu) : ""}} to="/Home" id={path == "/Home" || path == "/" || path == ""  ? "whiteColor" : ""} className={path == "/Home" || path == "/" || path == ""  ? "header__links__link whiteColor" : "header__links__link"}>Inicio</Link>
                <Link  onClick={() => {setPath("/AboutMe"); menu == true? setMenu(!menu) : ""}} to="/AboutMe" id={path == "/AboutMe" ? "whiteColor" : ""} className={path == "/AboutMe" ? "header__links__link whiteColor" : "header__links__link"}>¿Quien soy?</Link>
                <Link  onClick={() => {setPath("/Works"); menu == true? setMenu(!menu) : ""}} to="/Works" id={path == "/Works" ? "whiteColor" : ""} className={path == "/Works" ? "header__links__link whiteColor" : "header__links__link"}>Trabajos</Link>
                <Link  onClick={() => {setPath("/ContactMe"); menu == true? setMenu(!menu) : ""}} to="/ContactMe" id={path == "/ContactMe" ? "whiteColor" : ""}  className={path == "/ContactMe" ? "header__links__link whiteColor" : "header__links__link"}>Contacto</Link>
            </nav>
            <Link to="/ContactMe" className='header__contact'>¡Hablemos!</Link>
            <div className="bars__menu" onClick={() => {setMenu(!menu)}}>
              <span className={menu == 0 ? "line1__bars-menu" : "activeline1__bars-menu"}></span>
              <span className={menu == 0 ? "line2__bars-menu" : "activeline2__bars-menu"}></span>
              <span className={menu == 0 ? "line3__bars-menu" : "activeline3__bars-menu"}></span>
            </div>
        </header>


        <Routes>
          <Route path="" element={<Home path={path} setPath={setPath}></Home>}></Route>
          <Route path="/" element={<Home path={path} setPath={setPath}></Home>}></Route>
          <Route index path="/Home" element={<Home path={path} setPath={setPath}></Home>}></Route>
          <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>
          <Route path="/Works" element={<Works></Works>}></Route>
          <Route path="/ContactMe" element={<ContactMe></ContactMe>}></Route>
          <Route path="/Stack" element={<Stack></Stack>}></Route>
          <Route path="/Works/Gcb" element={<GcbWork></GcbWork>}></Route>
          <Route path="/Works/Gcb1" element={<GcbWork1></GcbWork1>}></Route>
          <Route path="/Works/Gcb2" element={<GcbWork2></GcbWork2>}></Route>
        </Routes>
        </BrowserRouter>

        <Footer path={path} setPath={setPath}></Footer>
      </div>
    </div>
  )
}

export default App
