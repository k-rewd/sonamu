import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul id='navbar'>
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
      </ul>
    </nav>
  )
}