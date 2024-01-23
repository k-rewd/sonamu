import React from 'react'
import './contact.css'

export default function Contact() {

  const handleClick = () => {
    const email = 'sonamu.tattoo@gmail.com'
    const subject = 'uwu'
    const body = 'Full Name: \nPhone Number: \nConcept: \nPlacement: \nSizing: \nColor or Black/Grey: \nReference Photos:'

    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailToLink;
  }
  // 240123-02-7782

  return (
    <section id='contactSection'>
      <div className='contact-splash'>
        <div className='email'>
          <div>full name, phone number, concept, placement, sizing, color/black+gray, reference photos </div>
          <button onClick={handleClick}>
            BOOK CONSULTATION
          </button>
        </div>

      </div>

    </section>
  )
}
