import './artists.css'

export default function Artists() {
  const abArt = ['1', '2', '3', '4', '5', '6', '7', '8']
  const bonesArt = ['1', '2', '3', '4', '5', '6', '7', '8']
  const grayArt = ['1', '2', '3', '4', '5', '6', '7', '8']
  const derekArt = ['1', '2', '3', '4', '5', '6', '7', '8']
  const raeArt = ['1', '2', '3', '4', '5', '6', '7', '8']
  const hazeArt = ['1', '2', '3', '4', '5', '6', '7', '8']
  const chonnyArt = ['1', '2', '3', '4', '5', '6', '7', '8']
  const yongArt = ['1', '2', '3', '4', '5', '6', '7', '8']



  return (
    <section id='artistsSection'>
      <body id='artist-splash'>
        <div className='wrapper'>
          <div className='container'>
            {/* ARTIST 1*/}



            <input type='radio' name='slide' id='c1' />
            <label for='c1' className='card'>

              <div className='artist'>
                <div className='artistName-container'>
                  <div className='fillerxD'></div>
                  <h1 className='artistName'>AB</h1>
                  <div className='ig'>
                    <i className="fa-brands fa-instagram"></i>
                    <h4>@blab_la</h4>
                  </div>
                </div>
                <div className='artist-images'>
                  {abArt.map(art => (
                    <div className='art'>{art}</div>
                  ))}
                </div>
              </div>
            </label>
            {/* ARTIST 2*/}
            <input type='radio' name='slide' id='c2' />
            <label for='c2' className='card'>
              <div className='artist'>
                <div className='artistName-container'>
                  <div className='fillerxD'></div>

                  <h1 className='artistName'>BONES</h1>
                  <div className='ig'>
                    <i className="fa-brands fa-instagram"></i>
                    <h4>@blab_la</h4>
                  </div>
                </div>
                <div className='artist-images'>
                  {bonesArt.map(art => (
                    <div className='art'>{art}</div>
                  ))}
                </div>
              </div>
            </label>
            {/* ARTIST 3*/}
            <input type='radio' name='slide' id='c3' />
            <label for='c3' className='card'>
              <div className='artist'>
                <div className='artistName-container'>
                  <div className='fillerxD'></div>

                  <h1 className='artistName'>GRAY</h1>
                  <div className='ig'>
                    <i className="fa-brands fa-instagram"></i>
                    <h4>@blab_la</h4>
                  </div>
                </div>
                <div className='artist-images'>
                  {grayArt.map(art => (
                    <div className='art'>{art}</div>
                  ))}
                </div>
              </div>
            </label>
            {/* ARTIST 4*/}
            <input type='radio' name='slide' id='c4' />
            <label for='c4' className='card'>
              <div className='artist'>
                <div className='artistName-container'>
                  <div className='fillerxD'></div>

                  <h1 className='artistName'>DEREK</h1>
                  <div className='ig'>
                    <i className="fa-brands fa-instagram"></i>
                    <h4>@blab_la</h4>
                  </div>
                </div>
                <div className='artist-images'>
                  {derekArt.map(art => (
                    <div className='art'>{art}</div>
                  ))}
                </div>
              </div>
            </label>
            {/* ARTIST 5*/}
            <input type='radio' name='slide' id='c5' />
            <label for='c5' className='card'>
              <div className='artist'>
                <div className='artistName-container'>
                  <div className='fillerxD'></div>

                  <h1 className='artistName'>RAE</h1>
                  <div className='ig'>
                    <i className="fa-brands fa-instagram"></i>
                    <h4>@blab_la</h4>
                  </div>
                </div>
                <div className='artist-images'>
                  {raeArt.map(art => (
                    <div className='art'>{art}</div>
                  ))}
                </div>
              </div>
            </label>
            {/* ARTIST 6*/}
            <input type='radio' name='slide' id='c6' />
            <label for='c6' className='card'>
              <div className='artist'>
                <div className='artistName-container'>
                  <div className='fillerxD'></div>

                  <h1 className='artistName'>HAZE</h1>
                  <div className='ig'>
                    <i className="fa-brands fa-instagram"></i>
                    <h4>@blab_la</h4>
                  </div>
                </div>
                <div className='artist-images'>
                  {hazeArt.map(art => (
                    <div className='art'>{art}</div>
                  ))}
                </div>
              </div>
            </label>
            {/* ARTIST 7*/}
            <input type='radio' name='slide' id='c7' />
            <label for='c7' className='card'>
              <div className='artist'>
                <div className='artistName-container'>
                  <div className='fillerxD'></div>

                  <h1 className='artistName'>YONG</h1>
                  <div className='ig'>
                    <i className="fa-brands fa-instagram"></i>
                    <h4>@blab_la</h4>
                  </div>
                </div>
                <div className='artist-images'>
                  {chonnyArt.map(art => (
                    <div className='art'>{art}</div>
                  ))}
                </div>
              </div>
            </label>
            {/* ARTIST 8*/}
            <input type='radio' name='slide' id='c8' />
            <label for='c8' className='card'>
              <div className='artist'>
                <div className='artistName-container'>
                  <div className='fillerxD'></div>

                  <h1 className='artistName'>CHONNY</h1>
                  <div className='ig'>
                    <i className="fa-brands fa-instagram"></i>
                    <h4>@blab_la</h4>
                  </div>
                </div>
                <div className='artist-images'>
                  {yongArt.map(art => (
                    <div className='art'>{art}</div>
                  ))}
                </div>
              </div>
            </label>


          </div>
        </div>
      </body>
    </section>
  )
}

{/* <input type='radio' name='slide' id='c6' />
<label for='c6' className='card'>
  <div className='artistName-container'>
    <h1 className='artistName'>HAZE</h1>
  </div>
  <div className='row'>
    <div className='icon'>6</div>
    <div className='description'>
      <h4>HAZE</h4>
      <p>blablalblablablablblalblablab</p>
    </div>
  </div>
</label> */}