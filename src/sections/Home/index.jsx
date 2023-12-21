import './home.css'
import seal from '../../assets/seal.png'
import logoimage2 from '../../assets/logo2SANseal.png'
import sonamupr from '../../assets/sonamupr.mp4'

export default function Home() {
  return (
    <section id='sonamuSection'>
      {/* <h1 >HOME</h1> */}
      <div className='videoBackground'>
        <div className='overlay'></div>
        <video src={sonamupr} autoPlay loop muted />
        {/* <video src={sonamupr} autoPlay loop muted />
        <video src={sonamupr} autoPlay loop muted /> */}

      </div>
      <div id='splash'>
        <div id='splash-text'>

          <h1>WHY JEREMY GAY</h1>
        </div>
        <div id='logo-seal'>
          <img id='logoimage2' src={logoimage2} />
          <img id='snm-seal' src={seal} />
        </div>
      </div>


    </section>
  )
}

