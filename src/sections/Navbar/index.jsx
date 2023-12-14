import './navbar.css'

export default function Navbar() {

  const navLinks = ['sonamu', 'artists', 'gallery', 'contact']

  const renderNavLinks = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;
    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth', block: 'end' })
    }

    return (
      <ul key={content} >
        <li>
          <button
            onClick={handleClickNav}
          >{content}</button>
        </li>
      </ul>
    )
  }

  return (
    <div>
      <div >
        <nav> 
          {navLinks.map(nav => renderNavLinks(nav))}
        </nav>
      </div>
    </div>
  )
}

{/* <ul id='navbar'>
        <a href='/'>sonamu</a>
        <li>
          <a href='/artists'>artists</a>
        </li>
        <li>
          <a href='/gallery'>gallery</a>
        </li>
        <li>
          <a href='/contact'>contact</a>
        </li>
      </ul> */}