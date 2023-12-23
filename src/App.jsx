import { Route, Routes } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Home from './sections/Home'
import Artists from './sections/Artists'
import Gallery from './sections/Gallery'
import './styles.css'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import About from './sections/About'
import Aftercare from './sections/Aftercare'

export default function App() {
  return (
    <>

      <Navbar />

      <body>
        <Home />
        <About />

        <Artists />
        <Gallery />
        <Aftercare />
        <Contact />
      </body>
        {/* <Footer /> */}

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