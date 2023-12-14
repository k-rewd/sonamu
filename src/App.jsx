import { Route, Routes } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Home from './sections/Home'
import Artists from './sections/Artists'
import Gallery from './sections/Gallery'
import './styles.css'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <body>
      <Home />
      <Artists />
      <Gallery />
      <Contact />
      </body>

    </>
  )
}


      {/* <nav>
        <Navbar />
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}