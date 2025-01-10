import './map.css'

export default function Map() {
  return(

      <div className='map-info'>

          <iframe
          className='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2296191323826!2d-118.3086795!3d34.0636276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b89ae43c1c8f%3A0x9f7d1fc00b4d7690!2s3921%20W%206th%20St%2C%20Los%20Angeles%2C%20CA%2090020!5e0!3m2!1sen!2sus!4v1703540692646!5m2!1sen!2sus"
          width="600"
          height="350"
          style={{border: '0'}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


  )
}
