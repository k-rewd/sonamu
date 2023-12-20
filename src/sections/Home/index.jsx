import './home.css'
import seal from '../../assets/seal.png'
import sonamupr from '../../assets/sonamupr.mp4'

export default function Home() {
  return (
    <section id='sonamuSection'>
      {/* <h1 >HOME</h1> */}
      {/* <div className='videoBackground'>
        <video src={sonamupr} autoPlay loop muted />
        <video src={sonamupr} autoPlay loop muted />
        <video src={sonamupr} autoPlay loop muted />

      </div> */}
      <img id='snm-sign' src={seal}/>

    </section>
  )
}

