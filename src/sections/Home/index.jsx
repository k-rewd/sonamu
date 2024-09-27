import './home.css'
import seal from '../../assets/seal.png'
import logoimage2 from '../../assets/logo2SANseal.png'
import sonamupr from '../../assets/sonamupr.mp4'

import Map from '../Map'


export default function Home() {
  return (
    <section id='sonamuSection'>
      {/* <h1 >HOME</h1> */}
      <div className='videoBackground'>
        {/* <div className='overlay'></div> */}
        <video src={sonamupr} autoPlay loop muted />
        {/* <video src={sonamupr} autoPlay loop muted />
        <video src={sonamupr} autoPlay loop muted /> */}

      </div>
      <div className='splash'>
        <div className='splash-left'>
          <div className='map-info'>
            <h2>3921 W. 6th street</h2>
            <h1>koreatown</h1>
            <h3>los angeles</h3>
          </div>
          <h4>walk-ins welcome 12pm - 6pm</h4>
          <Map />
        </div>
        <div className='logo-seal'>
          <img className='logoimage2' src={logoimage2} />
          <img className='snm-seal' src={seal} />
        </div>
      </div>

    </section>
  )
}
{/* <li>sonamu.tattoo@gmail.com</li> */ }
{/* <h1>full name, phone number, concept, placement, sizing, color/black+gray, reference photos</h1> */ }

