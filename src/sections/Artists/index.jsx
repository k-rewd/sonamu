import './artists.css'

import { Instagram, Mail } from 'lucide-react'

import img2 from '../../assets/ab1.jpg'
import img3 from '../../assets/bones.jpg'
import derek from '../../assets/derek.jpg'
import img5 from '../../assets/gray.jpg'

import ab3 from '../../assets/ab3.jpg'
import ab4 from '../../assets/ab4.jpg'
import ab5 from '../../assets/ab5.jpg'

import bones2 from '../../assets/bones2.png'
import bones3 from '../../assets/bones3.png'
import bones4 from '../../assets/bones4.png'

import gray2 from '../../assets/gray2.png'
import gray3 from '../../assets/gray3.png'
import gray4 from '../../assets/gray4.png'

import derek2 from '../../assets/derek2.png'
import derek3 from '../../assets/derek3.png'
import derek4 from '../../assets/derek4.png'

import rae2 from '../../assets/rae2.png'
import rae3 from '../../assets/rae3.png'
import rae4 from '../../assets/rae4.png'



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
    art: [img3, bones2, bones3, bones4],
    ig: '@lala_la'
  },
  {
    name: 'gray.',
    art: [img5, gray2, gray3, gray4],
    ig: '@lalala'
  },
  {
    name: 'derek.',
    art: [derek, derek2, derek3, derek4],
    ig: '@lalala'
  },
  {
    name: 'rae.',
    art: [firstimg, rae2, rae3, rae4],
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