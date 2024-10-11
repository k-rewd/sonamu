import './gallery.css'



import img2 from '../../assets/ab1.jpg'
import img3 from '../../assets/bones.jpg'
import img4 from '../../assets/derek.jpg'
import img5 from '../../assets/gray.jpg'

export default function Gallery() {


  const artistsData = [
    {
      name: 'AB',
      art: [img2, img3, img4, img5, '6', '7', '8'],
      ig: '@blab_la'
    },
    {
      name: 'BONES',
      art: [img3, '2'],
      ig: '@lala_la'
    },
    {
      name: 'GRAY',
      art: [img4, '2', '3'],
      ig: '@lalala'
    },
    {
      name: 'DEREK',
      art: [img5, '2', '3'],
      ig: '@lalala'
    },
    {
      name: 'RAE',
      art: [img2, '2', '3'],
      ig: '@lalala'
    },
    {
      name: 'HAZE',
      art: [img3, '2', '3'],
      ig: '@lalala'
    },
    {
      name: 'CHONNY',
      art: [img5, '2', '3'],
      ig: '@lalala'
    },
    {
      name: 'YONG',
      art: [img3, '2', '3'],
      ig: '@lalala'
    },
  ]

  
  return (
    <section id='gallerySection'>
      <div id="artistSplash">
        {artistsData.map((artist, index) => (
          <div key={index} className='artistCard'>
            <h1 className="artistName">{artist.name}</h1><div className='artistArt-container'>
            {artist.art.map(art =>(
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
    </section>
  );
};


