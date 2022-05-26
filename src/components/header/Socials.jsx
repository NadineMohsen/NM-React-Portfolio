import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

function Socials() {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/nadine-mohsen/" target="_blank">
            <BsLinkedin />
        </a>
        <a href="https://github.com/" target="_blank">
            <FaGithub />
        </a>
    </div>
  )
}

export default Socials