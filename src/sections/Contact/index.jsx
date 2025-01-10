import React from 'react'
import './contact.css'

import { Instagram, Mail } from 'lucide-react'


import Carousel from '../Components/Carousel/carousel'
import img1 from '../../assets/AB.png'
import img2 from '../../assets/ab1.jpg'
import img3 from '../../assets/bones.jpg'
import img4 from '../../assets/derek.jpg'
import img5 from '../../assets/gray.jpg'
import sonamupr from '../../assets/sonamupr.mp4'

import Map from '../Map'

export default function Contact() {

  // const handleClick = () => {
  //   const email = 'sonamu.tattoo@gmail.com'
  //   const subject = 'uwu'
  //   const body = 'Full Name: \nPhone Number: \nConcept: \nPlacement: \nSizing: \nColor or Black/Grey: \nReference Photos:'

  //   const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  //   window.location.href = mailToLink;
  // }
  // 240123-02-7782

  // const IMAGES = [
  //   {url: img1, alt: ''},
  //   {url: img2, alt: ''},
  //   {url: img3, alt: ''},
  //   {url: img4, alt: ''},
  //   {url: img5, alt: ''},
  // ]

  return (
    <section id='contactSection'>
      <div className='video-background'>
        <video src={sonamupr} autoPlay loop muted />
      </div>
      <div className='contact-splash'>
        <Map />
        <div className="location-hrs">
          <ul className="location">
            <li>3921 W. 6th St.</li>
            <li>KOREATOWN</li>
            <li>Los Angeles</li>
          </ul>
          <ul className="hours">
            <li>Mon ~ Wed Appointment Only!</li>
            <li>Thur~Sun 12:00PM~8:00PM</li>
            <li><Instagram/>DM 💌 or sonamu.tattoo@gmail.com</li>

          </ul>
        </div>
      </div>

    </section>

  )
}

{/* <div className='email'>
          <div>full name, phone number, concept, placement, sizing, color/black+gray, reference photos </div>
          <button onClick={handleClick}>
            BOOK CONSULTATION
          </button>
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