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
      <div className="footer-icons">
        <a className={`footer-info-link`} target="_blank" href="mailto:swrightdev@gmail.com" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16" >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
          </svg>
        </a>
        <a className={`footer-info-link`} target="_blank" href="tel:6094722897" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
            <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
          </svg>
        </a>
        <a className={`footer-info-link`} target="_blank" href="http://github.com/sleighs" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a className={`footer-info-link`} style={{display: 'none',}} target="_blank" href="https://www.linkedin.com/in/samuelwrightdev/" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </a>
      </div>
      {/*<Crypt /> &#8729;*/}
      <div className="footer-text">
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'auto',
          fontFamily: 'Cabin',
          fontSize: '.7em',
          padding: '5px 0px 7px 0px',
          gap: '2%',
        }}> <span>SAMUEL WRIGHT</span> <span>&copy;2024 </span></p>  
        <p id="proverb" style={{display: 'none', padding: '5px 0px 7px 0px',}} title={`"${proverbText?.title}" ${proverbText?.author ? '-' + proverbText.author : ''}`}>{`${proverbText?.text}`}</p>
      </div>
    </footer>
  )
}

export default Footer;