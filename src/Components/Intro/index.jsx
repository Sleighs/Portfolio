import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../../Context/DataContext'
import { ThemeContext } from '../../Context/ThemeContext'

import './style.css'
import ContactInfo from '../ContactInfo';


const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Good design is as little design as possible.", author: "Dieter Rams" },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { text: "The Matrix is everywhere. It is all around us.", author: "The Matrix" },
  { text: "There is no spoon.", author: "The Matrix" },
  { text: "Innovation is not about saying yes to everything. It's about saying NO to all but the most crucial features.", author: "Steve Jobs" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Technology is best when it brings people together.", author: "Matt Mullenweg" },
  { text: "The future is already here – it's just not evenly distributed.", author: "William Gibson" },
  { text: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
  { text: "The impossible is temporary, the impossible is nothing.", author: "Muhammad Ali" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  // { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programming is the art of telling another human what one wants the computer to do.", author: "Donald Knuth" },
  { text: "Clean code is not about perfection; it's about honesty.", author: "Robert C. Martin" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Programming is thinking, not typing.", author: "Casey Patton" },
  { text: "Good programmers write code that humans can understand.", author: "Martin Fowler" }
];

export default function Intro() {
  const { theme } = useContext(ThemeContext);
  const { setPageLocation } = useContext(DataContext);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [copyStatus, setCopyStatus] = useState({
    email: false,
    phone: false
  });

  const hiddenRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopyStatus(prev => ({ ...prev, [type]: false }));
      }, 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const scrollHandler = () => {
    if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop) {
      setPageLocation('home')
    }
  }

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className={"intro-container intro-container-" + theme} id="home"> 
      <div className={"about-intro about-intro-" + theme } ref={hiddenRef} 
        style={{
          overflow: 'hidden',
        }}
      >
        <div className="about-intro__content">
          <div className="about-intro__title">
          South Jersey web developer crafting fun and engaging solutions.
          </div>
          <div className="about-intro__subtitle">
            Let's build something extraordinary
          </div>
          <div className="about-intro__quote">
            <button className="about-intro__quote-nav about-intro__quote-nav--prev" onClick={prevQuote}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <div className="about-intro__quote-content">
              <p className="about-intro__quote-text">"{quotes[currentQuoteIndex].text}"</p>
              <p className="about-intro__quote-author">— {quotes[currentQuoteIndex].author}</p>
            </div>
            <button className="about-intro__quote-nav about-intro__quote-nav--next" onClick={nextQuote}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="about-intro__contact">
            <div className="about-intro__contact-card">
              <div className="about-intro__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="about-intro__contact-info">
                <div className="about-intro__contact-row">
                  <p 
                    className="about-intro__contact-text"
                    onClick={() => copyToClipboard('+1 (609) 742-2897', 'phone')}
                    title="Click to copy"
                  >
                    {copyStatus.phone ? 'Copied!' : '+1 (609) 742-2897'}
                  </p>
                </div>
              </div>
            </div>

            <div className="about-intro__contact-card">
              <div className="about-intro__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="about-intro__contact-info">
                <div className="about-intro__contact-row">
                  <p 
                    className="about-intro__contact-text"
                    onClick={() => copyToClipboard('swrightdev@gmail.com', 'email')}
                    title="Click to copy"
                  >
                    {copyStatus.email ? 'Copied!' : 'swrightdev@gmail.com'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
