import React from 'react'
import {BsLinkedin, BsStack} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsStackOverflow} from "react-icons/bs"

function Socials() {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/nadine-mohsen/" target="_blank">
            <BsLinkedin />
        </a>
        <a href="https://github.com/NadineMohsen" target="_blank">
            <FaGithub />
        </a>
        <a href="https://stackoverflow.com/users/17531775/nadine" target="_blank">
            <BsStackOverflow />
        </a>
    </div>
  )
}

export default Socials