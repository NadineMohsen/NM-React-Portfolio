import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className="btn">Donwnload CV</a>
        <a href="#contact" className="btn">Contact Me</a>
    </div>
  )
}

export default CTA