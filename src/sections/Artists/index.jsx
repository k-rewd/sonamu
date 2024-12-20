import './artists.css'

import { Instagram, Mail } from 'lucide-react'

import img2 from '../../assets/ab1.jpg'
import img3 from '../../assets/bones.jpg'
import img4 from '../../assets/derek.jpg'
import img5 from '../../assets/gray.jpg'
import firstimg from '../../assets/firstimg.png'
import Carousel from '../Components/Carousel/carousel'
import { useState } from 'react'

const artistsData = [
  {
    name: 'AB',
    art: [firstimg, img3, img4, img5, '', ''],
    ig: '@blab_la'
  },
  {
    name: 'BONES',
    art: [firstimg, img3, ''],
    ig: '@lala_la'
  },
  {
    name: 'GRAY',
    art: [firstimg, img4, '', ''],
    ig: '@lalala'
  },
  {
    name: 'DEREK',
    art: [firstimg, '', ''],
    ig: '@lalala'
  },
  {
    name: 'RAE',
    art: [firstimg, img2, '', ''],
    ig: '@lalala'
  },
  {
    name: 'HAZE',
    art: [firstimg, img3, '', ''],
    ig: '@lalala'
  },
  {
    name: 'CHONNY',
    art: [firstimg, img5, '', ''],
    ig: '@lalala'
  },
  {
    name: 'GIN',
    art: [firstimg, img3, '', ''],
    ig: '@lalala'
  },
]

export default function Artists() {

  const [infoToggled, setInfoToggled] = useState(Array(artistsData.length).fill(false));



  const toggleInfo = (index) => {
    setInfoToggled((prev) =>
      prev.map((toggle, i) => i === index ? !toggle : toggle)
    )
  }



  return (
    <section id='artistsSection'>
      <div id='artist-desktop'>
        {artistsData.map((artist, index) => (
          <div key={index} className={`artist-card ${infoToggled[index] ? 'flipped' : ''}`}>
            <div className="card-inner">
              {/* front */}
              <h1 className='display-name'>{artist.name}</h1>
              <div className='art-container'>
                <Carousel images={artist.art} />
                <button className='book-back' onClick={() => toggleInfo(index)}><span>book</span></button>
              </div>

              {/* back */}
              <div className='artist-info'>
                <div className='info-directions'>
                  <div className='contact-info'>
                    <h3 className="artist-ig"><Instagram />: {artist.ig}</h3>
                    <h3 className="artist-email"> <Mail />: email@email.com</h3>
                  </div>
                  {/* <ul className='email-directions'>
                    <li>full name</li>
                    <li>age</li>
                    <li>phone number</li>
                    <li>concept</li>
                    <li>placement</li>
                    <li>sizing</li>
                    <li>color/black+gray</li>
                    <li>reference photos</li>
                  </ul> */}
                  <div>artist img</div>
                </div>
                <div>
                  <button id='artist-back' className='book-back' onClick={() => toggleInfo(index)}><span>{artist.name}</span></button>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <div id='artist-mobile'>
        <div className="artist-splash">
          {artistsData.map((artist, index) => (
            <div key={index} className='artistCard'>
              <h1 className="artistName">{artist.name}</h1>
              <div className='artistArt-container'>
                {artist.art.map(art => (
                  <img
                    className='artistArt' //rename art later
                    key={art}
                    src={art}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// {!infoToggled[index] ? (
//   <div className='art-container'>
//     <Carousel images={artist.art} />
//     <button className='book-back' onClick={() => toggleInfo(index)}>book!</button>
//   </div>
// ) : (
//   <div className='artist-info'>
//     <h1 className='artist-name'>{artist.name}</h1>
//     <p>Instagram: {artist.ig}</p>
//     <button className='book-back' onClick={() => toggleInfo(index)}>back!</button>
//   </div>
// )
// }