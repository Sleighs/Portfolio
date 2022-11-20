import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './style.css'

export default function MainNav(props) {
    const {pageLocation, setPageLocation} = props

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    const scrollTo = (id) => {
      const section = document.getElementById(id);
      //section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    const navigateTo = () => {}

    return (
      <nav className="navigation">
        <Link to="/" className="main-nav__list-item brand-name" 
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
                  ? "nav-link-highlighted main-nav__list-item" 
                  : "nav-link-normal main-nav__list-item"
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
                  ? "nav-link-highlighted main-nav__list-item" 
                  : "nav-link-normal main-nav__list-item"
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
                  ? "nav-link-highlighted main-nav__list-item" 
                  : "nav-link-normal main-nav__list-item"
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
            <li className="main-nav__list-item-container">
              <Link to="/work"
                className=
                {
                  pageLocation === 'work' 
                  ? "nav-link-highlighted main-nav__list-item" 
                  : "nav-link-normal main-nav__list-item"
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
                  ? "nav-link-highlighted main-nav__list-item" 
                  : "nav-link-normal main-nav__list-item"
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
  