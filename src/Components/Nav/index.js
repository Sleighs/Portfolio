import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { DataContext } from '../../Context/DataContext';
import { ThemeContext } from '../../Context/ThemeContext';
import ThemeToggle from '../ThemeToggle';
import './style.css'

export default function MainNav(props) {
  const { pageLocation, setPageLocation } = useContext(DataContext)
  const { theme } = useContext(ThemeContext)

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navigation navigation-${theme}`}>
      <div className="main-nav">
        <div className='nav-location'>
          <div className='nav-location__title'>
            <span className='nav-location__title-red' style={{display: 'none'}}>{`${pageLocation}`}</span>
            <span className='nav-location__title2'  style={{display: 'none'}}>{' // '}</span>
            <span className='nav-location__title' onClick={()=>{
              scrollTo('home');
              setPageLocation('home');
            }}>{'samuelwright.dev'}</span>
          </div>
        </div>
        <button
          className={`hamburger hamburger-${theme}`}
          onClick={()=> {setIsNavExpanded(!isNavExpanded);}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d={`
                M3 5a1 
                1 0 011-1h12a1 
                1 0 110 2H4a1 
                1 0 01-1-1z 
                
                M3 10a1 
                1 0 011-1h12a1 
                1 0 110 2H4a1
                1 0 01-1-1z  
                
                M3 15a1 
                1 0 011-1h12a1 
                1 0 110 2H4a1 
                1 0 01-1-1z`}
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li className="main-nav__list-item-container">
              <div
                className=
                {
                  pageLocation === 'home' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-` + theme
                }
                onClick={() => {
                  scrollTo('home');
                  setPageLocation('home');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                home
              </div> 
            </li>
            <li className="main-nav__list-item-container">
              <div
                className=
                {
                  pageLocation === 'projects' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                }
                onClick={() => {
                  setPageLocation('projects');
                  scrollTo('projects');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                projects
              </div> 
            </li>
            <li className="main-nav__list-item-container">
              <div
                className=
                {
                  pageLocation === 'about' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                } 
                onClick={() => {
                  setPageLocation('about');
                  scrollTo('about');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                about
              </div>
            </li>
            <li className="main-nav__list-item-container" style={{display:'none',}}>
              <div
                className=
                {
                  pageLocation === 'skills' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                } 
                onClick={() => {
                  setPageLocation('skills');
                  scrollTo('skills');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                skills
              </div>
            </li>
            <li className="main-nav__list-item-container" style={{display:'none',}}>
              <div
                className=
                {
                  pageLocation === 'work' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                }
                onClick={() => {
                  setPageLocation('work');
                  scrollTo('work');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                work
              </div> 
            </li>
            <li className="main-nav__list-item-container">
              <div
                className=
                {
                  pageLocation === 'contact' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                }
                onClick={() => {
                  setPageLocation('contact');
                  scrollTo('contact');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                contact
              </div> 
            </li>     
          </ul>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
}

function MainNavAlt(props) {
    const {pageLocation, setPageLocation} = props

    const { theme } = useContext(ThemeContext)

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    const scrollTo = (id) => {
      const section = document.getElementById(id);
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    const navigateTo = () => {}

    return (
      <nav className="navigation">
        <Link to="/" 
          className="main-nav__list-item brand-name" 
          onClick={()=>{setPageLocation('home'); scrollTo('logo');}}
          style={{display: 'none'}}>
          {'logo'}
        </Link> 
        <button
          className="hamburger"
          onClick={()=> {
            setPageLocation('home');
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d={`
                M3 5a1 
                1 0 011-1h12a1 
                1 0 110 2H4a1 
                1 0 01-1-1z 
                
                M3 10a1 
                1 0 011-1h12a1 
                1 0 110 2H4a1
                1 0 01-1-1z  
                
                M3 15a1 
                1 0 011-1h12a1 
                1 0 110 2H4a1 
                1 0 01-1-1z`}
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li className="main-nav__list-item-container">
              <Link to="/"
                className=
                {
                  pageLocation === 'home' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                }
                onClick={() => {
                  setPageLocation('home');
                  scrollTo('home');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                home
              </Link> 
            </li>
            <li className="main-nav__list-item-container">
              <Link to="/projects"
                className=
                {
                  pageLocation === 'projects' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                }
                onClick={() => {
                  setPageLocation('projects');
                  scrollTo('projects');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                projects
              </Link> 
            </li>
            <li className="main-nav__list-item-container">
              <Link to="/about"
                className=
                {
                  pageLocation === 'about' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                } 
                onClick={() => {
                  setPageLocation('about');
                  scrollTo('about');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                about
              </Link>
            </li>
            <li className="main-nav__list-item-container" style={{display:'none',}}>
              <Link to="/skills"
                className=
                {
                  pageLocation === 'skills' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                } 
                onClick={() => {
                  setPageLocation('skills');
                  scrollTo('skills');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                skills
              </Link>
            </li>
            <li className="main-nav__list-item-container" style={{display:'none',}}>
              <Link to="/work"
                className=
                {
                  pageLocation === 'work' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                }
                onClick={() => {
                  setPageLocation('work');
                  scrollTo('work');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                work
              </Link> 
            </li>
            <li className="main-nav__list-item-container">
              <Link to="/contact" 
                className=
                {
                  pageLocation === 'contact' 
                  ? `nav-link-highlighted main-nav__list-item` 
                  : `nav-link-normal main-nav__list-item main-nav__list-item-${theme}`
                }
                onClick={() => {
                  setPageLocation('contact');
                  scrollTo('contact');
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                contact
              </Link> 
            </li>
            
                        
          </ul>
        </div>
      </nav>
    );
  }
  