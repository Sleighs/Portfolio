import React, { useEffect, useState } from 'react';
import './style.css';
import Crypt from '../Crypt';

const Footer = (props) => {
  const proverbs = [
    {latin: "Audentes fortuna iuvat", english: "Fortune favors the bold", author: "Virgil"},
    {latin: "Fiat justitia, ruat caelum", english: "Let justice be done, though the heavens fall", author: "Anonymous" /*"Lucius Calpurnius Piso Caesoninus, Immanuel Kant"*/},
    //{latin: "Astra inclinant, sed non obligant", english: "The stars incline us, they do not bind us", author: "Anonymous"},
    {latin: "Aut viam inveniam aut faciam", english: "I will either find a way or make one", author: "Hannibal"},
    //{latin: "Fiat justitia, et pereat mundus", english: "Let justice be done, though the world should perish", author: "Ferdinand I"},
    //{latin: "Vi veri universum vivus vici", english: "By the power of truth, I, while living, have conquered the universe", author: "Robert Nye, Faust"},
    //{latin: "Igne natura renovatur integra.", english: "Through fire, nature is reborn whole.", author: "Anonymous"},
    //{latin: "Flectere si nequeo superos, Acheronta movebo.", english: "If I can not bend the will of Heaven, I shall move Hell.", author: "Virgil"},
    //{latin: "Ut haec ipsa qui non sentiat deorum vim habere is nihil omnino sensurus esse videatur.", english: "If any man cannot feel the power of God when he looks upon the stars, then I doubt whether he is capable of any feeling at all.", author: "Horace"},
  ]

  let proverb = proverbs[Math.floor(Math.random() * proverbs.length)];

  const [proverbText, setProverbText] = useState(proverb);

  const newProverb = () => {
    let newProverb = proverbs[Math.floor(Math.random() * proverbs.length)];
    setProverbText(newProverb);
  }

  // Scroll to seleced element
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  useEffect(() => {
    let englishOrLatin = Math.floor(Math.random() * 2);
    console.table(proverb)
    setProverbText({
      title: proverb.latin,//englishOrLatin === 0 ? proverb.english : proverb.latin,
      text: proverb.english,//englishOrLatin === 0 ? proverb.latin : proverb.english,
      author: proverb?.author,
    })

    // Add hover box with proverb.title to #proverb
    /*let proverbElement = document.getElementById("proverb");
    proverbElement.addEventListener("mouseover", () => {
      let hoverText = document.createElement("div");
      hoverText.id = "proverb-hover-text";
      hoverText.innerHTML = proverb.title;
    })*/
  }, [])

  return(
    <footer id="footer-container">
      {/*<Crypt /> &#8729;*/}
      <div className="footer-content">
        <div className='footer-contact-info-container'>
          <div className="footer-info-link-container">
            <div style={{
              // textTransform: 'uppercase',
              fontFamily: 'Cabin Bold',
              display: 'none'
            }}
            onClick={() => {
              scrollTo('contact');
            }}
            >Contact for full high converting websites</div>
          </div>
          <div className="footer-info-link-container">
            <div>
            Samuel Wright | Full Stack Web Developer 
            </div>  
          </div>
          <div className="footer-info-link-container" style={{display: 'none', }}>
            <div id="proverb">
                <p style={{display: '', padding: '5px 0px 7px 0px',}} title={`"${proverbText?.title}" ${proverbText?.author ? '-' + proverbText.author : ''}`}>{`"${proverbText?.text}"`}</p>
            </div>
          </div>
          <div className="footer-info-link-container">
            <a className={`footer-info-link`} target="_blank" href="tel:6094722897" rel="noreferrer">
              <svg style={{
                transform: 'translateY(-2px)',  
              }}
              xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
              </svg>
            </a>
            <div>1 609 472 2897</div>
          </div>
          <div className="footer-info-link-container">
            <a className={`footer-info-link`} target="_blank" href="mailto:swrightdev@gmail.com" rel="noreferrer">
              <svg style={{
                transform: 'translateY(-1px)',  
              }}
              xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16" >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
              </svg>
            </a>
            <div>swrightdev@gmail.com</div>
          </div>
        </div>

        <div className="footer-brand-info-container">
          <div className="footer-info-link-container">
            <a className={`footer-info-link`} target="_blank" href="http://github.com/sleighs" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <div>Github</div>
          </a>
        </div>

        <div className="footer-info-link-container">
        </div>
      </div>
        
      

      </div>
      
        <div className="footer-brand-info">2024</div>
    </footer>
  )
}

export default Footer;