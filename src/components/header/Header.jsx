import React from 'react'
import './Header.css'
import CTA from './CTA'

import NM from '../../assets/NM.png'
import shape1 from '../../assets/shape1.png'
import Socials from './Socials'


function Header() {
  return (
    <header>
        <img src={shape1} alt="shape" className="shape"></img>
      <div className="container header-container">
        <h4 className="text-light">
          Welcome to my Portfolio
        </h4>
       <h1 className="text-light">Nadine Mohsen </h1>
       <h3 className="text-light">Fullstack Web Deveoper</h3>
        <CTA />
        <div className="me">
        <img src={NM} alt="logo"></img>
        </div>
        <Socials />
      </div>

    </header>
  )
}

export default Header