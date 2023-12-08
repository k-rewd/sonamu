// import { useState } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles.css'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <><nav>
      <Navbar isLoaded={isLoaded}/>
      </nav>
      {isLoaded && (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route />
      </Routes>
      )}
    </>
  )
}


