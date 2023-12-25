import './artists.css'

export default function Artists() {
  return (
    <section id='artistsSection'>
      <body id='artist-splash'>
        <h1>ARTISTS</h1>
        <div className='wrapper'>
          <div className='container'>
            {/* ARTIST 1*/}



            <input type='radio' name='slide' id='c1' />
            <label for='c1' className='card'>

              <div>hello</div>
              <div className='row'>
                <div className='icon'>1</div>
                <div className='description'>
                  <h4>AB</h4>
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
                  <h4>BONES</h4>
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
                  <h4>GRAY</h4>
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
                  <h4>DEREK</h4>
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
                  <h4>RAE</h4>
                  <p>blablalblablablablblalblablab</p>
                </div>
              </div>
            </label>
            {/* ARTIST 6*/}
            <input type='radio' name='slide' id='c6' />
            <label for='c6' className='card'>
              <div className='row'>
                <div className='icon'>6</div>
                <div className='description'>
                  <h4>HAZE</h4>
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