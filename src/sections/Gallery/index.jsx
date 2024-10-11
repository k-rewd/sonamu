import './gallery.css'

export default function Gallery() {


  const artistsData = [
    {
      name: 'AB',
      art: ['1', '2', '3', '4', '5', '6', '7', '8'],
      ig: '@blab_la'
    },
    {
      name: 'BONES',
      art: ['1', '2'],
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


