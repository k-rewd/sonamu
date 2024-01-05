import React, { useRef } from 'react'
import './contact.css'

export default function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    
  }


  return (
    <section id='contactSection'>
      <div className='contact-splash'>
        <div className='email'>
          <div>full name, phone number, concept, placement, sizing, color/black+gray, reference photos </div>

        </div>
        {/* <h1>CONTACT</h1> */}
      </div>
    </section>
  )
}