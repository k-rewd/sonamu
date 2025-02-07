import './artists.css'

import { Instagram, Mail } from 'lucide-react'

import img2 from '../../assets/ab1.jpg'
import img3 from '../../assets/bones.jpg'
import img4 from '../../assets/derek.jpg'
import img5 from '../../assets/gray.jpg'

import ab3 from '../../assets/ab3.jpg'
import ab4 from '../../assets/ab4.jpg'
import ab5 from '../../assets/ab5.jpg'

import firstimg from '../../assets/firstimg.png'
import Carousel from '../Components/Carousel/carousel'
import { useState } from 'react'

const artistsData = [
  {
    name: 'ab.',
    art: [img2, ab3, ab4, ab5],
    ig: '@blab_la'
  },
  {
    name: 'bones.',
    art: [firstimg, img3, ''],
    ig: '@lala_la'
  },
  {
    name: 'gray.',
    art: [firstimg, img4, '', ''],
    ig: '@lalala'
  },
  {
    name: 'derek.',
    art: [firstimg, '', ''],
    ig: '@lalala'
  },
  {
    name: 'rae.',
    art: [firstimg, img2, '', ''],
    ig: '@lalala'
  },
  {
    name: 'haze.',
    art: [firstimg, img3, '', ''],
    ig: '@lalala'
  },
  {
    name: 'chonny.',
    art: [firstimg, img5, '', ''],
    ig: '@lalala'
  },
  {
    name: 'gin.',
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
                  <div className='artist-portrait'>artist img</div>
                  <div className='contact-info'>
                    <h3 className="artist-ig"><Instagram />: {artist.ig}</h3>
                    <h3 className="artist-email"> <Mail />: email@email.com</h3>
                  </div>
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