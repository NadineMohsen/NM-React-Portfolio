import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiMacbookLine} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'
import {MdWork} from 'react-icons/md'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=> setActiveNav("#skills")} className={activeNav === '#skills' ? 'active': ''}><RiMacbookLine/></a>
      <a href="#projects" onClick={()=> setActiveNav("#projects")} className={activeNav === '#projects' ? 'active': ''}><MdWork /></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === '#contact' ? 'active': ''}><RiContactsLine /></a>
    </nav>
  )
}

export default Nav