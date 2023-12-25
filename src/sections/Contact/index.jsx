import { useRef } from 'react'
import './contact.css'

export default function Contact() {
  const form = useRef()
  const sendEmail = () => {

  }


  return (
    <section id='contactSection'>
      <div className='contact-splash'>

      {/* <h1>CONTACT</h1>
      <ul>
        <li>3921 W. 6th street. Koreantown, los Angeles</li>
        <li>sonamu.tattoo@gmail.com</li>
        <li>walk-ins welcome 12pm - 6pm</li>
        <li>
          full name, phone number, concept, placement, sizing, color/black+gray, reference photos
        </li>
        <li></li>
        <li></li>
      </ul>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text'
        placeholder='Full Name'
        name='user_name' required/>
        <input type='email'
        placeholder='Full Name'
        name='user_email' required/>
        <input type='text'
        placeholder='Subject'
        name='subject' required/>
        <textarea name='message'
        cols='30' rows='10'></textarea>
        <button type='submit'>Book</button>


      </form> */}
      </div>
    </section>
  ) 
}