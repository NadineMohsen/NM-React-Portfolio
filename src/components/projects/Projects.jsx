import React from 'react'
import './Projects.css'
import projectData from "./projectsData.js"

function Projects() {
  
  return (
    <section id="projects">
      <div className="container project-container">
    {
    projectData.map(({id,image,title,github,demo}) => {
      return(
       <article key={id} className="project-item">
          <div className="project-item-img">
            <img src={image} alt={title}></img>
          </div>
        <h3>{title}</h3>
        <div className="project-item-cta">
        <a href={github} className="btn" target="_blank"> Github Repo</a>
        <a href={demo} className="btn btn-primary" target="_blank"> Live Demo</a>
        </div>
        </article> 
      )
    })
    }
      </div>
    </section>
  )
}

export default Projects