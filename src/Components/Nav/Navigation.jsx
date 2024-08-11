import { useContext, useEffect, useRef, useState } from 'react';
import './navigation.css'
import Contact from '../Contact';


export default function Navigation(Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navState, setNavState] = useState('navigation--top');
  const [isOpen, setIsOpen] = useState(false);

  const navbarRef = useRef(null);

  const toggleMenu = () => {
    console.log('toggled', isOpen);
    setIsOpen(!isOpen);
  };

  const scrollHandler = () => {
    if (window.scrollY > 290) {
      setNavState('navigation--middle');
    } else {
      setNavState('navigation--top');
    }
  }

  // Save current scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navigation ${navState}`} ref={navbarRef}>
      <div className="navigation--container">
        <div className="navigation--logo">
          <span style={{fontWeight: 400, fontSize: '30px', transform: 'translateY(-2px)'}}>S</span>
          <span style={{fontWeight: 400}}>AMUEL</span>
          <span style={{fontWeight: 300}}>WRIGHT.DEV</span>
        </div>

        <div className="navigation--menu" style={{display: 'none'}}>
          <div className="navigation--menu-item">Home</div>
          <div className="navigation--menu-item">About Us</div>
          <div className="navigation--menu-item">Services +</div>
          <div className="navigation--menu-item">Our Work</div>
          <div className="navigation--menu-item">Contact Us</div>
        </div>

        <div className="navigation--get-started-button" onClick={toggleMenu}>Start your project</div>
        
        <div className="navigation--hamburger" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </div>
      </div>
      {isOpen && <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  )
}


const HamburgerMenu = (Props) => {
  const { isOpen, setIsOpen } = Props;

  return (
    <div className={`hamburger-menu humburger-menu--${isOpen ? 'open' : 'closed'}`}>
      <div className="hamburger-menu--navigation">
        <div className="navigation--logo">
          <span style={{fontWeight: 400, fontSize: '34px', transform: 'translateY(-2px)'}}>S</span>
          <span style={{fontWeight: 400}}>AMUEL</span>
          <span style={{fontWeight: 300}}>WRIGHT.DEV</span>
        </div>
        <div className="hamburger-menu--close-button" 
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
        </div>
      </div>

      <div className="hamburger-menu--content">
        <Contact />

        <div className="hamburger-menu--item-section" style={{display: 'none'}}>
          <div className="hamburger-menu--item">Home</div>
          <div className="hamburger-menu--item">About Us</div>
          <div className="hamburger-menu--item">Services +</div>
          <div className="hamburger-menu--item">Our Work</div>
          <div className="hamburger-menu--item">Contact Us</div>
          <div className="hamburger-menu--item hamburger-menu--get-started">
            <span>Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
            </svg>
          </div>
        </div>

        <div className="hamburger-menu--contact-section">
          <div className="hamburger-menu--call-us">
            <div className="hamburger-menu--call-us-title">Call</div>
            <div className="hamburger-menu--call-us-text">+1 609 472 2897</div>
            <div className="hamburger-menu--call-us-text">+1 267 540 8680</div>
          </div>

          <div className="hamburger-menu--email-us">
            <div className="hamburger-menu--email-us-title">Send a message</div>
            <div className="hamburger-menu--email-us-text">swrightdev@gmail.com</div>
            <div className="hamburger-menu--email-us-text">samuel@thrillwebdigital.com</div>
          </div>
        </div>      

      </div>
    </div>
  )
}