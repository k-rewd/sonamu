import './artists.css'

export default function Artists() {
  return (
    <section id='artistsSection'>
      {/* <h1>ARTISTS</h1> */}
      <body id='artist-splash'>
        <div className='wrapper'>
          <div className='container'>
            {/* ARTIST 1*/}
            <input type='radio' name='slide' id='c1' checked />
              <label for='c1' className='card'>
                <div className='row'>
                  <div className='icon'>1</div>
                  <div className='description'>
                    <h4>ARTIST1</h4>
                    <p>blablalblablablablblalblablab</p>
                  </div>
                </div>
              </label>
              {/* ARTIST 2*/}
              <input type='radio' name='slide' id='c2' />
              <label for='c2' className='card'>
                <div className='row'>
                  <div className='icon'>2</div>
                  <div className='description'>
                    <h4>ARTIST2</h4>
                    <p>blablalblablablablblalblablab</p>
                  </div>
                </div>
              </label>
               {/* ARTIST 3*/}
               <input type='radio' name='slide' id='c3' />
              <label for='c3' className='card'>
                <div className='row'>
                  <div className='icon'>3</div>
                  <div className='description'>
                    <h4>ARTIST3</h4>
                    <p>blablalblablablablblalblablab</p>
                  </div>
                </div>
              </label>
               {/* ARTIST 4*/}
               <input type='radio' name='slide' id='c4' />
              <label for='c4' className='card'>
                <div className='row'>
                  <div className='icon'>4</div>
                  <div className='description'>
                    <h4>ARTIST4</h4>
                    <p>blablalblablablablblalblablab</p>
                  </div>
                </div>
              </label>
               {/* ARTIST 5*/}
               <input type='radio' name='slide' id='c5' />
              <label for='c5' className='card'>
                <div className='row'>
                  <div className='icon'>5</div>
                  <div className='description'>
                    <h4>ARTIST5</h4>
                    <p>blablalblablablablblalblablab</p>
                  </div>
                </div>
              </label>
          </div>
        </div>
      </body>
    </section>
  )
}