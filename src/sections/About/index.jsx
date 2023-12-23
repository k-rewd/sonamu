import './about.css'

import seal from '../../assets/seal.png'
import logoimage2 from '../../assets/logo2SANseal.png'
import sonamupr from '../../assets/sonamupr.mp4'

export default function About() {
  return (
    <section id='aboutSection'>
      {/* <h1 >HOME</h1> */}
      <div className='videoBackground'>
        <div className='overlay'></div>
        {/* <video src={sonamupr} autoPlay loop muted /> */}
        {/* <video src={sonamupr} autoPlay loop muted /> */}
        <video src={sonamupr} autoPlay loop muted />

      </div>
      <div id='about-splash'>
        <div className='splash-text'>
          <h1>WHY JEREMY GAY</h1>

          {/* <p> hello hello hello</p> */}
        </div>
        {/* <div className='logo-seal'>
          <img className='logoimage2' src={logoimage2} />
          <img className='snm-seal' src={seal} />
        </div> */}
      </div>


    </section>
  )
}