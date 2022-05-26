import React from 'react'
import './Header.css'
import CTA from './CTA'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello, I'm
        </h5>
        <h1>
          Nadine Mohsen
        </h1>
       <h5 className="text-light">Fullstack Deveoper</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header