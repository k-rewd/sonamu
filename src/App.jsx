import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Artists from './components/Artists'
import Gallery from './components/Gallery'
import './styles.css'
import Contact from './components/Contact'

export default function App() {
  return (
        <>
        <nav>
          <Navbar />
        </nav>
          {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/artists' element={<Artists/> }/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes> */}
          <div><Home/></div>
          <div id='artists'><Artists/></div>
          <div id='artists'><Gallery/></div>
          <div id='artists'><Contact/></div>

          
        </>
  )
}


