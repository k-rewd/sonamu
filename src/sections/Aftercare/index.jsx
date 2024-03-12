import './aftercare.css'
import flash1 from '../../assets/flash2.png'
import flash2 from '../../assets/flash1.png'

export default function Aftercare() {
  return (
    <section id='aftercareSection'>
      {/* <div className='fbox-1'></div>
      <div className='fbox-2'></div>
      <div className='fbox-3'></div> */}
      <div className='aftercare-splash'>
        <div className='aftercare-instructions'>
          <div id='sectionAB'>
            <div className='after-title-container'><h1>After</h1></div>
            <div id='aftercare1'>
              <div className='do-box'>
                <div className='do-title'><h2>DO</h2></div>
                <ul className='do-info'>
                  <li>Take a break from any strenuous exercise to avoid trapping sweat inside the bandage</li>
                  <li>Wear clean, loose fitting clothing around your tattoo</li>
                </ul>
              </div>
              <div className='dont-box'>
                <div className='dont-title'><h2>DON'T</h2></div>
                <ul className='dont-info'>
                  <li>For three weeks - Avoid baths, pools, saunas, hot tubs, oceans, tanning beds, and direct sun exposure</li>
                  <li>Do not pick, itch, scratch, or shave over your healing tattoo</li>
                </ul>
              </div>
            </div>
          </div>
          <div id='sectionCD'>
            <ul id='aftercare2'>
              <li>Keep the saniderm bandage on your tattoo for 4 to 7 days - fluid buildup during this time is normal</li>
              <li>After 4 to 7 days, remove the saniderm and wash gently with clean hands and unscented antibacterial soap</li>
              <li>Pat dry and apply a thin layer of aquaphor or a&d ointment</li>
              <li>Wash and reapply ointment in the morning and night, and periodically throughout the day as it dries out</li>
              <li>After one week, switch to using an unscented moisturizing lotion for the next three weeks</li>
            </ul>
            <h1>Care</h1>
          </div>
        </div>
      </div>
    </section>
  )
}



