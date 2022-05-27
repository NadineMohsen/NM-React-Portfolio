import React from 'react'
import './Footer.css'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

function Footer() {
  return (
    <footer>
        <a href="#" className="footer-logo"></a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/NadineMohsen"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/nadine-mohsen/"><BsLinkedin /></a>
        </div>

        <div className="copyright">
          <small> &copy; Nadine Mohsen. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer