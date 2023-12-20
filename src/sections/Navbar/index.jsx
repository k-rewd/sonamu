import './navbar.css'
import logo2 from '../../assets/logo2.png'
import React, { useState } from 'react'

export default function Navbar() {

  const navLinks = ['sonamu', 'artists', 'gallery', 'contact']
  const navLinkKrn = ['소나무', '아티스트', '갤러리', '연락처']

  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  const renderNavLinks = (content, index) => {
    const scrollToId = `${content.toLowerCase()}Section`;
    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
      <ul key={content} >
        <li >
          <button
            onClick={handleClickNav}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >{hoveredIndex === index ? navLinkKrn[index] : content}</button>
        </li>
      </ul>
    )
  }


  return (
    
    <div className='navContainer' >
      <nav>
        {navLinks.map((nav, index) => renderNavLinks(nav, index))}
      </nav>
    </div>
  )
}



