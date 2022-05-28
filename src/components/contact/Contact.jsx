import React, { useRef } from 'react';
import './Contact.css'
import {MdOutlineMail} from "react-icons/md"
import {FaLinkedinIn} from "react-icons/fa"
import {BsStackOverflow} from "react-icons/bs"
import emailjs from 'emailjs-com'
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jcvo09i', 'template_azmnbq1', form.current, 'GFZwx9s9GIQWf-F5I')
    e.target.reset()
    document.getElementById("paragraph").style.display="block"
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };


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

          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Full name" required/>
              <input type="email" className="form-control" name="email" placeholder="Email" required/>
              <textarea name="message" rows="7" placeholder="Your Message Here" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
              <p id="paragraph" className="form-submitted">Thank you for you email! </p>
          </form>
      </div>


    </section>
  )
}

export default Contact