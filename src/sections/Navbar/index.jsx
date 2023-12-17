import './navbar.css'
import logo2 from '../../assets/logo2.png'

export default function Navbar() {

  const navLinks = ['sonamu', 'artists', 'gallery', 'contact']
  const navLinkKrn = ['소', '나', '무', 'ㅋㅋ']


  const renderNavLinks = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;
    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
      <ul key={content} >
        <li >
          <button
            onClick={handleClickNav}
          >{content}</button>
        </li>
      </ul>
    )
  }


  return (
    
    <div className='navContainer' >
      
      {/* <nav className='navEng'>
        {navLinks.map(nav => renderNavLinks(nav))}
      </nav> */}
      <nav className='navKrn'>
        {navLinkKrn.map(nav => renderNavLinks(nav))}

      </nav>
      <div >
        <ul className='navENG'>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>

    </div>
  )
}

{/* <ul id='navbar'>
        <a href='/'>sonamu</a>
        <li>
          <a href='/artists'>artists</a>
        </li>
        <li>
          <a href='/gallery'>gallery</a>
        </li>
        <li>
          <a href='/contact'>contact</a>
        </li>
      </ul> */

  ////////


}

// // EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
// const csv = require('@fast-csv/format');
// const { writeToPath } = require('@fast-csv/format');

// const { chromium } = require('playwright');

// async function saveHackerNewsArticles() {
//   // launch browser
//   let browser;
//   try {
//     browser = await chromium.launch({ headless: true });
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     // go to Hacker News
//     await page.goto("https://news.ycombinator.com");

//     // Extract data from the page
//     const articles = await page.evaluate(() => {
//       const anchors = document.querySelectorAll('.titleline > a')
//       return Array.from(anchors).map(anchor => ({
//         title: anchor.innerText,
//         url: anchor.href

//       }))
//   });
//     // Print the extracted data
//     console.log(articles.slice(0,10));
//     const topTenArticles = articles.slice(0,10)

//     writeToPath('./data.csv', topTenArticles);

//   } catch (error) {
//     console.error('ERROR!!:', error);
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
//   }
// }


// (async () => {
//   await saveHackerNewsArticles();
// })();

