import React from 'react'
import './Header.css'
import CTA from './CTA'
import NM from '../../assets/NM.png'
import Socials from './Socials'
function Header() {
  return (
    <header>
      <div className="container header-container">
        <h3 className="text-light">
          Welcome to my Portfolio
        </h3>
       <h1 className="text-light">Nadine Mohsen </h1>
       <h3 className="text-light">Fullstack Web Deveoper</h3>
        <CTA />
        <div className="me">
        <img src={NM} alt="logo"></img>
        </div>
        <Socials />

      <a href="#contact" className="scroll-down">>>>></a>
      </div>

    </header>
  )
}

export default Header