import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './style.css'

export default function MainNav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    const scrollTo = (id) => {
      const section = document.getElementById(id);
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
      <nav className="navigation">
        <Link to="/" className="main-nav__list-item brand-name" onClick={()=>{scrollTo('logo');}}>{'LOGO'}</Link> 
        <button
          className="hamburger"
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
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li className="main-nav__list-item-container">
              <div
                className="main-nav__list-item" 
                onClick={() => {
                    scrollTo('projects');
                    setIsNavExpanded(!isNavExpanded);
                }}
              >
                  Projects</div> 
            </li>
            <li className="main-nav__list-item-container">
              <div
                className="main-nav__list-item" 
                onClick={() => {
                    scrollTo('skills');
                    setIsNavExpanded(!isNavExpanded);
                }}
              >
                Skills
              </div>
            </li>
            <li className="main-nav__list-item-container">
              <div 
                className="main-nav__list-item"
                onClick={() => {
                    scrollTo('contact');
                    setIsNavExpanded(!isNavExpanded);
                }}
              >
                Contact
              </div> 
            </li>
            <li className="main-nav__list-item-container">
              <div
                className="main-nav__list-item"
                onClick={() => {
                    scrollTo('resume');
                    setIsNavExpanded(!isNavExpanded);
                }}
              >
                Resume
              </div> 
            </li>
                        
          </ul>
        </div>
      </nav>
    );
  }
  