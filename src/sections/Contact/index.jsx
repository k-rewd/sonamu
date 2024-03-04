import React from 'react'
import './contact.css'
import Carousel from '../Components/Carousel/carousel'
import img1 from '../../assets/AB.png'
import img2 from '../../assets/ab1.jpg'
import img3 from '../../assets/bones.jpg'
import img4 from '../../assets/derek.jpg'
import img5 from '../../assets/gray.jpg'


export default function Contact() {

  const handleClick = () => {
    const email = 'sonamu.tattoo@gmail.com'
    const subject = 'uwu'
    const body = 'Full Name: \nPhone Number: \nConcept: \nPlacement: \nSizing: \nColor or Black/Grey: \nReference Photos:'

    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailToLink;
  }
  // 240123-02-7782

  const IMAGES = [
    {url: img1, alt: ''},
    {url: img2, alt: ''},
    {url: img3, alt: ''},
    {url: img4, alt: ''},
    {url: img5, alt: ''},
  ]

  return (
    <section id='contactSection'>
      {/* <div className='contact-splash'>
        <div className='email'>
          <div>full name, phone number, concept, placement, sizing, color/black+gray, reference photos </div>
          <button onClick={handleClick}>
            BOOK CONSULTATION
          </button>
        </div>
      </div> */}
      {/* <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          aspectRatio: '10 / 6',
          margin: '0 auto',
        }}>
        <Carousel images={IMAGES} />
      </div> */}
      <div>
        
      </div>

    </section>

  )
}
