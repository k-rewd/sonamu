import './artists.css'

import img2 from '../../assets/ab1.jpg'
import img3 from '../../assets/bones.jpg'
import img4 from '../../assets/derek.jpg'
import img5 from '../../assets/gray.jpg'
import Carousel from '../Components/Carousel/carousel'
import { useState } from 'react'


export default function Artists() {

  const artistsData = [
    {
      name: 'AB',
      art: [img2, img3, img4, img5, '', '', ''],
      ig: '@blab_la'
    },
    {
      name: 'BONES',
      art: [img3, ''],
      ig: '@lala_la'
    },
    {
      name: 'GRAY',
      art: [img4, '', ''],
      ig: '@lalala'
    },
    {
      name: 'DEREK',
      art: [img5, '', ''],
      ig: '@lalala'
    },
    {
      name: 'RAE',
      art: [img2, '', ''],
      ig: '@lalala'
    },
    {
      name: 'HAZE',
      art: [img3, '', ''],
      ig: '@lalala'
    },
    {
      name: 'CHONNY',
      art: [img5, '', ''],
      ig: '@lalala'
    },
    {
      name: 'YONG',
      art: [img3, '', ''],
      ig: '@lalala'
    },
  ]

  

  return (
    <section id='artistsSection'>
      <div id='artist-desktop'>
          {artistsData.map((artist, index) => (
            <div key={index} className='artist-card'>
              <h1 className='artist-name'>{artist.name}</h1>
              <div className='art-container'>
                
            <Carousel images={artist.art}/>

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


