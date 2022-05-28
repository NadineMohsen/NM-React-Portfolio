import React from 'react'
import './Footer.css'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsStackOverflow} from "react-icons/bs"

function Footer() {
  return (
    <footer>
        <a href="#" className="footer-logo"></a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/NadineMohsen" target="_blank"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/nadine-mohsen/" target="_blank"><BsLinkedin /></a>
          <a href="https://stackoverflow.com/users/17531775/nadine" target="_blank"><BsStackOverflow/ ></a>

        </div>

        <div className="copyright">
          <small> &copy; Nadine Mohsen. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer