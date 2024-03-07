import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';
import './artists.css';
import '../Components/Carousel/carousel.css'
import { useState } from 'react';


import sonamupr from '../../assets/sonamupr.mp4'


import img1 from '../../assets/AB.png'
import img2 from '../../assets/ab1.jpg'
import img3 from '../../assets/bones.jpg'
import img4 from '../../assets/derek.jpg'
import img5 from '../../assets/gray.jpg'

const artistsData = [
  {
    name: 'AB',
    art: [img1, img2, img3, img4, '5', '6', '7', '8'],
    ig: '@blab_la'
  },
  {
    name: 'BONES',
    art: [img5, '2'],
    ig: '@lala_la'
  },
  {
    name: 'GRAY',
    art: ['1', '2', '3'],
    ig: '@lalala'
  },
  {
    name: 'DEREK',
    art: ['1', '2', '3'],
    ig: '@lalala'
  },
  {
    name: 'RAE',
    art: ['1', '2', '3'],
    ig: '@lalala'
  },
  {
    name: 'HAZE',
    art: ['1', '2', '3'],
    ig: '@lalala'
  },
  {
    name: 'CHONNY',
    art: ['1', '2', '3'],
    ig: '@lalala'
  },
  {
    name: 'YONG',
    art: ['1', '2', '3'],
    ig: '@lalala'
  },

  // ... add similar entries for other artists
];

const CarouselModal = ({ isOpen, handleClose, artist }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return artist.art.length - 1;
      return index - 1
    })
  }

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === artist.art.length - 1) return 0;
      return index + 1
    })
  }
  return (
    isOpen && (
      <div className='modal'>
        <div className='modal-overlay' onClick={handleClose}></div>
        <div className='modal-content'
          style={{
            maxWidth: '1200px',
            width: '100%',
            aspectRatio: '16 / 9',
            margin: '0 auto',
          }}
        >
          {/* <span className='close' onClick={handleClose}>&times;</span> */}
          <section style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div className='carousel'
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                overflow: 'hidden'
              }}>
              {artist.art.map(art => (
                <img
                  className="carousel-img"
                  key={art}
                  src={art}
                  style={{ translate: `${-100 * imageIndex}%` }}
                />
              ))}

            </div>
            <button onClick={showPrevImage}
              className="carousel-btn"
              style={{ left: 0 }}
            ><ArrowBigLeft /></button>
            <button onClick={showNextImage}
              className="carousel-btn"
              style={{ right: 0 }}
            ><ArrowBigRight />
            </button>
            <div
              style={{
                position: 'absolute',
                bottom: '.5rem',
                left: '50%',
                translate: '-50%',
                display: 'flex',
                gap: '.25rem',
              }}
            >
              {artist.art.map((_, index) => (
                <button
                  key={index}
                  className='carousel-dot-btn'
                  onClick={() => setImageIndex(index)}
                >{index === imageIndex ? <CircleDot /> : <Circle />}</button>
              ))}
            </div>
          </section>
        </div>
      </div>
    )
  )

}

export default function Artists() {
  const [currentArtist, setCurrentArtist] = useState(null);
  const [modal, setModal] = useState(false);
  const [checked, unChecked] = useState(null)

  const openModal = (artist) => {
    setCurrentArtist(artist);
    setModal(true);
  }

  const closeModal = () => {
    setCurrentArtist(null);
    setModal(false);
  }

  return (
    <section id='artistsSection'>
      {/* <div className='videoBackground'>
        <video src={sonamupr} autoPlay loop muted />
      </div> */}
      <body id='artist-splash'>
        <div className='wrapper'>
          <div className='container'>

            {artistsData.map((artist, index) => (
              <div key={index}>
                <input 
                type='radio' 
                name='slide' 
                id={`c${index + 1}`} 
                />
                <label htmlFor={`c${index + 1}`} className='card'>
                  <button className='view-art-button' onClick={() => openModal(artist)}>&#91;  V I E W  &#183; A R T &#93;</button>
                  <div className='artist'>
                    {/* <div className='artistName-container'> */}
                    <div className='artist-info'>
                      <h1 className='artist-name'>{artist.name}</h1>
                      <div className='artist-ig'>
                        <i className="fa-brands fa-instagram"></i>
                        {/* <h4>{artist.ig}</h4> */}
                      </div>
                    </div>
                    {/* </div> */}
                    {/* <div className='artist-images'>
                      {artist.art.map((art, artIndex) => (
                        <div key={artIndex} className='art'>{art}</div>
                      ))}
                    </div> */}
                  </div>
                </label>
              </div>
            ))}

          </div>
        </div>
      </body>
      <CarouselModal isOpen={modal} handleClose={closeModal} artist={currentArtist} />
    </section>
  );
}