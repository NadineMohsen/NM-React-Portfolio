import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import {FaAward} from "react-icons/fa"
import {FaLanguage} from "react-icons/fa"
function About() {
  return (
    <section id="about">
      <h5>Get To Know me</h5>
      <h2>About Me</h2>
      <div className="container about-container"> 
        <div className="about-me">
          <div className="about-me-img">
            <img src={about} alt="aboutme">
            </img>
          </div>
        </div>    

        <div className="about-content">
            <div className="about-cards">
              <article className='about-card'> 
              <FaAward  className="about-icon"/>
                <h5>Education</h5>
                <small>University of Birmingham Coding Bootcamp</small>
                <br/>
                <small>Bachelor of Telecom Engineering</small>

              </article>

              <article className='about-card'> 
              <FaLanguage  className="about-icon"/>
                <h5>Languages</h5>
                <small>English <br/>French<br/> Arabic</small>
              </article>
            </div> 
        <p>
        Dedicated, motivated trilingual (English, Arabic, French) Full Stack Web Developer able to build a website from ground up: concept, navigation, layout and programming.
        <br />
        I am a communication and electronics Engineer, I recently completed a Certificate in Full Stack Web Development from University of Birmingham where I learned best practices for designing powerful mobile-friendly websites and applications. 
        Skilled at writing well-designed, testable and efficient code using current best practices in Web development.
        </p>

        <a href="#contact" className="btn">Let's talk</a>
          </div>
      </div>
   
    </section>
  )
}

export default About