import React from 'react'
import './Skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Skills() {
  return (
    <section id="skills">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container skills-container">
        <div className="skills-frontend">
            <h3>FrontEnd Development</h3>
            <div className="skills-content">
            <article className="skills-details">
            <BsPatchCheckFill className="skills-details-icons"/>
              <div>
              <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className="skills-details">
            <BsPatchCheckFill className="skills-details-icons"/>
              <div>
              <h4>Css</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className="skills-details">
            <BsPatchCheckFill className="skills-details-icons"/>
              <div>
              <h4>Js</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className="skills-details">
            <BsPatchCheckFill className="skills-details-icons"/>
              <div>
              <h4>Css Frameworks</h4>
              <small>Experienced</small>
              </div>
            </article>
            </div>
        </div>


        <div className="skills-backend">
            <h3>BackEnd Development</h3>
            <div className="skills-content">
            <article className="skills-details">
            <BsPatchCheckFill className="skills-details-icons"/>
              <div>
              <h4>React</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className="skills-details">
            <BsPatchCheckFill className="skills-details-icons"/>
              <div>
              <h4>MongoDb</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className="skills-details">
            <BsPatchCheckFill className="skills-details-icons"/>
              <div>
              <h4>NodeJs</h4>
              <small>Experienced</small>
              </div>
            </article>

            <article className="skills-details">
            <BsPatchCheckFill className="skills-details-icons"/>
              <div>
              <h4>MySql</h4>
              <small>Experienced</small>
              </div>
            </article>  
              </div>
          </div>
      </div>
    </section>
  )
}

export default Skills