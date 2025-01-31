import './navbar.css'
import React, { useState } from 'react'
import logo2 from '../../assets/logo2.png'
import seal from '../../assets/seal.png'
import logoimage2 from '../../assets/logo2SANseal.png'

export default function Navbar() {

  const navLinks = ['home', 'artists', 'contact']
  const navLinkKrn = ['소나무', '아티스트', '연락처']
  const krnFontStyle = {
    // fontStyle: 'italic',
    fontFamily: 'Nanum Brush Script',
    fontSize: '25px',
    margin: '0',
    padding: '0'
  }

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
          >{hoveredIndex === index ? (
            <span style={krnFontStyle}>{navLinkKrn[index]}</span>
          ) : (
            content
          )}
          </button>
        </li>
      </ul>
    )
  }


  return (

    <div className='navContainer' >
      <nav>
        <div className='logo-seal'>
          <img className='logoimage2' src={logoimage2} />
          <img className='snm-seal' src={seal} />
        </div>
        {navLinks.map((nav, index) => renderNavLinks(nav, index))}
      </nav>
      <div className='footer'>
        <h3>ipsum ipsum ipsum</h3>
      </div>
    </div>
  )
}



