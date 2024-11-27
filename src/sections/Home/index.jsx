import './home.css'
import seal from '../../assets/seal.png'
import logoimage2 from '../../assets/logo2SANseal.png'
import sonamupr from '../../assets/sonamupr.mp4'

import Map from '../Map'


export default function Home() {
  return (
    <section id='sonamuSection'>
      <div className='videoBackground'>
        <video src={sonamupr} autoPlay loop muted />
      </div>
      <div className='splash'>
        <div className='logo-seal'>
          <img className='logoimage2' src={logoimage2} />
          <img className='snm-seal' src={seal} />
        </div>
        <h1 >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h1>
      </div>

    </section>
  )
}
{/* <li>sonamu.tattoo@gmail.com</li> */ }
{/* <h1>full name, phone number, concept, placement, sizing, color/black+gray, reference photos</h1> */ }

