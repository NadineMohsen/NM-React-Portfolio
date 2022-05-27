import React from 'react'
import './Contact.css'
import {MdOutlineMail} from "react-icons/md"
import {FaLinkedinIn} from "react-icons/fa"
import {BsStackOverflow} from "react-icons/bs"
function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
                 <MdOutlineMail className="contact-icons"/>
                <h4>Email</h4>
                <h5>nadine.mohsen@hotmail.com</h5>
                <a href="mailto:nadine.mohsen@hotmail.com" target="_blank">Send me an email</a>
            </article>

            <article className="contact-option">
                 <FaLinkedinIn className="contact-icons"/>
                <h4>LinkedIn</h4>
                <h5>Nadine Mohsen</h5>
                <a href="https://www.linkedin.com/in/nadine-mohsen/" target="_blank">Message me on LinkedIn</a>
            </article>

            <article className="contact-option">
                 <BsStackOverflow className="contact-icons"/>
                <h4>StackOverflow</h4>
                <h5>Nadine Mohsen</h5>
                <a href="https://stackoverflow.com/users/17531775/nadine" target="_blank">StackOverflow</a>
            </article>

            </div>

          <form action="">
              <input type="text" name="name" placeholder="Full name" required/>
              <input type="email" name="email" placeholder="Email" required/>
              <textarea name="message" rows="7" placeholder="Your Message Here" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

       
      </div>
    </section>
  )
}

export default Contact