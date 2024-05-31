import React, { useContext, useEffect, useState, useRef } from 'react';

import { DataContext } from '../../Context/DataContext'

import mintPic from '../../Resources/Images/portfolio-mint2048.png';
import cashflowPic from '../../Resources/Images/portfolio-cashflowjs.png';
import heromatchupsPic from '../../Resources/Images/portfolio-heromatchups.png';
import realityCalcPic from '../../Resources/Images/portfolio-realitycalc03.png';
import chatplusPic from '../../Resources/Images/logo-600x400.png';
import ytpwebscraperPic from '../../Resources/Images/portfolio-ytpwebscraper.png';
import Tag from '../Tag';

import './style.css'



const defaultRefState = {
  realityCalc: false,
  chatPlus: false,
  heroMatchups: false,
  ytpWebScraper: false,
  mint: false,
  cashFlow: false
};

const Projects = (props) => {
    const { setPageLocation, projectsToDisplay } = useContext(DataContext);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [inView, setInView] = useState(defaultRefState);

    const hiddenRef = useRef();
    const ref = useRef(null);
    const refRealityCalc = useRef(null);
    const refChatPlus = useRef(null);
    const refHeroMatchups = useRef(null);
    const refYTPWebScraper = useRef(null);
    const refMint = useRef(null);
    const refCashFlow = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    
    const scrollHandler = () => {
        if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop + 125) {
            setPageLocation('projects')
        }
    }

    // Save current scroll position
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

    useEffect(() => {
      if (ref?.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight + 250) {
          setInView(true);
        } else {
          setInView(false);
        }
      }

      // if (refChatPlus?.current) {
      //   const top = refChatPlus.current.getBoundingClientRect().top;
      //   const windowHeight = window.innerHeight;
      //   if (top < windowHeight + 250) {
      //     setInView({...inView, chatPlus: true});
      //   } else {
      //     setInView({...inView, chatPlus: false});
      //   }
      // }  
      
      // if (refHeroMatchups.current) {
      //   const top = refHeroMatchups.current.getBoundingClientRect().top;
      //   const windowHeight = window.innerHeight;
      //   if (top < windowHeight + 250) {
      //     setInView({...inView, heroMatchups: true});
      //   } else {
      //     setInView({...inView, heroMatchups: false});
      //   }
      // }
      
      // if (refYTPWebScraper.current) {
      //   const top = refYTPWebScraper.current.getBoundingClientRect().top;
      //   const windowHeight = window.innerHeight;
      //   if (top < windowHeight + 250) {
      //     setInView({...inView, ytpWebScraper: true});
      //   } else {
      //     setInView({...inView, ytpWebScraper: false});
      //   }
      // }
      
      // if (refMint.current) {
      //   const top = refMint.current.getBoundingClientRect().top;
      //   const windowHeight = window.innerHeight;
      //   if (top < windowHeight + 250) {
      //     setInView({...inView, mint: true});
      //   } else {
      //     setInView({...inView, mint: false});
      //   }
      // } 
      
      // if (refCashFlow.current) {
      //   const top = refCashFlow.current.getBoundingClientRect().top;
      //   const windowHeight = window.innerHeight;
      //   if (top < windowHeight + 250) {
      //     setInView({...inView, cashFlow: true});
      //   } else {
      //     setInView({...inView, cashFlow: false});
      //   }
      // }
    }, [scrollPosition]);

    return (
        <div id="projects-container" ref={hiddenRef}>
            
            <div className={`row project-realitycalc project-left-slide ${inView ? 'project-in-view' : ''}`} 
                id="project-realitycalc"
                ref={refRealityCalc} 
                style={{display: projectsToDisplay.includes('realitycalc') ? 'flex' : 'none'}}
            >
                <div className="col-md-7 project-description">
                    <h3 className="projects-row-title"><strong>Male Reality Calculator</strong></h3>
                    <p>Developer of the popular online dating tool The Male Reality Calculator. The calculator uses U.S. Census Bureau statistics to calculate the user's odds of meeting their ideal woman. 
                    <p style={{display: 'none'}}>Featured on <a className="project-link-style" target="_blank" href="https://screenrant.com/what-is-reality-check-calculator-tinder-explained/" rel="noreferrer">Screenrant</a>.</p>
                    </p>
                    <p className="project-description__link">
                        <a target="_blank" href="https://realitycalc.com/" rel="noreferrer">Realitycalc.com</a>
                    </p>    
                    <div className="tag-row">
                        <Tag name={'React'}/>
                        <Tag name={'Redux'}/>
                        <Tag name={'JavaScript'}/>
                    </div>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-realitycalc" target="_blank" href="https://realitycalc.com"rel="noreferrer" title="Check it out">
                    <img className="img-responsive rounded projects-pic mx-auto d-block" alt="RealityCalc.com" src={realityCalcPic}/>
                    </a>
                </div>
                <hr/>
            </div>

            <div className={`row project-chatplus project-right-slide  ${inView ? 'project-in-view' : ''}`} id="project-chatplus" title="ChatPlus for Rumble"
                ref={refChatPlus}
                style={{display: projectsToDisplay.includes('chatplus') ? 'flex' : 'none'}}
            >
                <div className="col-md-7 project-description">
                    <h3 className="projects-row-title"><strong>ChatPlus</strong></h3>
                    <p>ChatPlus is a Google Chrome extension for Rumble that improves livestream chat user experience. The extension introduces user-friendly features to improve user interaction and engagement.</p>
                    <>Features include:</>
                    <ul>
                        <li>User mention highlighting</li>
                        <li>Easy user tagging</li>
                        <li>Username color schemes</li>
                    </ul>
                    <p className="project-description__link"><a target="_blank" href="https://github.com/sleighs/chat-plus" rel="noreferrer">Find out more</a>
                    </p>
                    <p className="project-description__link"><a target="_blank" href="https://chrome.google.com/webstore/detail/chatplus-for-rumble/odlcomopigapcpmlpmmmhlhegajembio?hl=en&authuser=0" rel="noreferrer">Chrome Web Store</a>
                    </p>
                    <p className="project-description__link"><a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/chatplus-for-rumble/" rel="noreferrer">Firefox Add-on Store</a>
                    </p>
                    <div className="tag-row">
                        <Tag name={'JavaScript'}/> 
                        <Tag name={'Chrome Extension'}/>
                        <Tag name={'React'}/>
                    </div>
                </div>
                <div className="col-md-5 project-pic-content chatplus-pic-container">
                    <a className="projects-pic-container-chatplus" target="_blank" href="https://github.com/sleighs/chat-plus"rel="noreferrer" title="Check it out">
                    <img className="img-responsive rounded projects-pic mx-auto d-block" alt="ChatPlus" src={chatplusPic}/>
                    </a>
                </div>
                <hr/>
            </div>

            <div className={`row project-heromatchups project-left-slide ${inView ? 'project-in-view' : ''}`}  id="project-heromatchups" 
                ref={refHeroMatchups}
                style={{display: projectsToDisplay.includes('heromatchups') ? 'flex' : 'none'}}
            >
                <div className="col-md-7 project-description">
                    <h3  className="projects-row-title"><strong>Hero Matchups API</strong></h3>
                    <p>The Hero Matchups API is a character matchup and counter resource created for Blizzard's team-based first-person shooter Overwatch 2. Check out the documentation and live demo <a className="project-link-style" target="_blank" href="https://heromatchups.com/" rel="noreferrer">here</a>.</p>                    
                    <p className="project-description__link"><a target="_blank" href="https://heroMatchups.com" rel="noreferrer">Heromatchups.com</a></p>
                    <p className="project-description__link"><a target="_blank" href="https://github.com/Sleighs/hero-matchups-api/" rel="noreferrer">Visit the repository</a></p>

                    <div className="tag-row">
                        <Tag name={'JavaScript'}/> 
                        <Tag name={'MongoDB'}/>
                        <Tag name={'React'}/>
                    </div>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-heromatchups" target="_blank" href="https://github.com/sleighs/heromatchups" rel="noreferrer" title="Visit">
                        <img className="img-responsive rounded projects-pic d-block mx-auto" alt="HeroMatchups" src={heromatchupsPic}/>
                    </a>
                </div>
                <hr/>
            </div>

            <div className={`row project-ytpwebscraper project-right-slide ${inView ? 'project-in-view' : ''}`} id="project-ytpwebscraper"
                ref={refYTPWebScraper}
                style={{display: projectsToDisplay.includes('yt-playlist-webscraper') ? 'flex' : 'none'}}
            >
                <div className="col-md-7 project-description">
                    <h3  className="projects-row-title"><strong>YouTube Playlist Web Scraper</strong></h3>
                    <p>A Node.js web scraper that retrieves the information of each video in a YouTube playlist with Puppeteer and saves the data in a json file. </p>
                    <p className="project-description__link">
                        <a target="_blank" href="https://github.com/Sleighs/youtube-playlist-web-scraper/" rel="noreferrer">Check out the repository here</a>  
                    </p>
                    <div className="tag-row">
                        <Tag name={'Web Scraper'}/>
                        <Tag name={'Node.js'}/>
                        <Tag name={'JavaScript'}/> 
                    </div>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-ytpwebscraper" target="_blank" href="https://github.com/Sleighs/youtube-playlist-web-scraper/"rel="noreferrer" title="GitHub">
                        <img className="img-responsive rounded projects-pic mx-auto d-block" alt="YouTube Playlist Web Scraper" src={ytpwebscraperPic}/>
                    </a>
                </div>
                <hr/>
            </div>

            <div className={`row project-ytpwebscraper project-left-slide ${inView ? 'project-in-view' : ''}`} id="project-ytpwebscraper"
                ref={refYTPWebScraper}
                style={{display: projectsToDisplay.includes('yt-playlist-downloader') ? 'flex' : 'none'}}
            >
                <div className="col-md-7 project-description">
                    <h3  className="projects-row-title"><strong>YouTube Playlist Downloader</strong></h3>
                    <p>A Node.js web scraper that downloads each video in a YouTube playlist, using Puppeteer to collect the videos and ytdl-core to download them.</p>
                    <p className="project-description__link">
                        <a target="_blank" href="https://github.com/Sleighs/youtube-playlist-downloader/" rel="noreferrer">Check out the repository here</a>  
                    </p>
                    <p className="project-description__link">
                        <a target="_blank" href="https://github.com/Sleighs/youtube-playlist-web-scraper/" rel="noreferrer">Find the web scraper here</a>  
                    </p>
                    <div className="tag-row">
                        <Tag name={'Web Scraper'}/>
                        <Tag name={'JavaScript'}/> 
                        <Tag name={'Node.js'}/>
                    </div>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-ytpwebscraper" target="_blank" href="https://github.com/Sleighs/youtube-playlist-downloader/"rel="noreferrer" title="GitHub">
                        <img className="img-responsive rounded projects-pic mx-auto d-block" alt="YouTube Playlist Downloader" src={ytpwebscraperPic}/>
                    </a>
                </div>
                <hr/>
            </div>

            <div className={`row project-mint project-right-slide ${inView ? 'project-in-view' : ''}`} id="project-mint" 
                ref={refMint}
                style={{display: projectsToDisplay.includes('mint') ? 'flex' : 'none'}}
            >
                <div className="col-md-7 project-description">
                    <h3 className="projects-row-title"><strong>Mint 2048</strong></h3>
                    <p><a className="project-link-style" target="_blank" href="https://plus-7ed02.web.app/" rel="noreferrer">Mint</a> is a sliding tile puzzle game based on 2048 by Gabriele Cirulli where players combine tiles, perform combos and use special abilities to create the 2048 tile.</p>
                    <p className="project-description__link">
                        <a target="_blank" href="https://github.com/Sleighs/Mint-2048" rel="noreferrer">Check out Mint 2048 </a>    
                    </p>
                    <div className="tag-row">
                        <Tag name={'React'}/>
                        <Tag name={'JavaScript'}/> 
                        <Tag name={'CSS'}/>
                    </div>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-mint" target="_blank" href="https://github.com/sleighs/mint-2048" rel="noreferrer" title="Play">
                        <img className="img-responsive rounded projects-pic d-block mx-auto" alt="Mint 2048" src={mintPic}/>
                    </a>
                </div>
                <hr/>
            </div>
            
            <div className={`row project-cashflow project-left-slide ${inView ? 'project-in-view' : ''}`} id="project-cashflow"
                ref={refCashFlow}
                style={{display: projectsToDisplay.includes('cashflow') ? 'flex' : 'none'}}
            >
                <div className="col-md-7 project-description">
                    <h3  className="projects-row-title"><strong>CashFlow JS</strong></h3>
                    <p><a className="project-link-style" target="_blank" href="https://sleighs.github.io/CashFlowJs/" rel="noreferrer">CashFlow JS</a> is an adaptation of the CashFlow 101 board game with additional gameplay options and rule customization that allows for many unique ways to play.</p>
                    <p className="project-description__link">
                        <a target="_blank" href="https://github.com/Sleighs/CashFlowJs/" rel="noreferrer">Check out CashFlowJs</a>  
                    </p>
                    <p className="project-description__link">
                        <a target="_blank" href="https://github.com/Sleighs/cashflow-mobile" rel="noreferrer">View CashFlowJs for mobile</a>
                    </p>
                    <div className="tag-row">
                        <Tag name={'JavaScript'}/> 
                        <Tag name={'JQuery'}/>
                        <Tag name={'React Native'}/>
                    </div>
                </div>
                <div className="col-md-5 project-pic-content">
                    <a className="projects-pic-container-cashflow" target="_blank" href="https://github.com/Sleighs/CashFlowJs"rel="noreferrer" title="Play">
                        <img className="img-responsive rounded projects-pic mx-auto d-block" alt="CashFlow JS" src={cashflowPic}/>
                    </a>
                </div>
            </div>
        
{/* 
          {ProjectData.map((project, index) => {
            if (project?.id) {
              return (
                <Project projectIndex={index} projectData={project} />
              )
            } else { 
              return <></>}
          })} */}
        </div>
    )
}


const ProjectData = [
  {
    title: `The Male Reality Calculator`,
    description: `Developer of the popular online dating tool The Male Reality Calculator. The calculator uses U.S. Census Bureau statistics to calculate the user's odds of meeting their ideal woman.`,
    links: [
      { link: `https://realitycalc.com/`, linkText: `Realitycalc.com` }
    ],
    tags: ['React', 'Redux', 'JavaScript'],
    pic: realityCalcPic,
    id: 'realitycalc',
  },
  {
    title: `ChatPlus`,
    description: `ChatPlus is a Google Chrome extension for Rumble that improves livestream chat user experience. The extension introduces user-friendly features to improve user interaction and engagement.`,
    features: [
      'User mention highlighting',
      'Easy user tagging',
      'Username color schemes'
    ],
    links: [
      { link: 'https://github.com/sleighs/chat-plus', linkText: 'Find out more' },
      { link: 'https://chrome.google.com/webstore/detail/chatplus-for-rumble/odlcomopigapcpmlpmmmhlhegajembio?hl=en&authuser=0', linkText: 'Chrome Web Store' },
      { link: 'https://addons.mozilla.org/en-US/firefox/addon/chatplus-for-rumble/', linkText: 'Firefox Add-on Store' }

    ]
  
  }
];

const Project = (props) => {
  const { projectData, projectIndex } = props;
  
  const { projectsToDisplay } = useContext(DataContext);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [inView, setInView] = useState(false);

  const ref = useRef(null);

  // Save current scroll position
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

  useEffect(() => {
    if (ref?.current) {
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight + 250) {
        setInView(true);
      } else {
        setInView(false);
      }
    }
  }, [scrollPosition]);

  return (
    <div className={`row project-${projectData.id} ${projectIndex % 2 ? 'project-left-slide' : 'project-right-side'} ${inView ? 'project-in-view' : ''}`} 
      id={`project-${projectData?.id}`}
      ref={ref} 
      key={projectIndex}
      style={{display: projectsToDisplay.includes(projectData?.id) ? 'flex' : 'none'}}
    >
      <div className="col-md-7 project-description">
        <h3 className="projects-row-title"><strong>{projectData?.title}</strong></h3>
        <p>{projectData?.description}</p>
        {projectData?.features && 
          <>
            <p>Features include:</p>
            <ul>
              {projectData?.features.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
          </>
        }
        <p className="project-description__link">
           {projectData?.links.map((link, index) => 
            <a key={index} target="_blank" href={link?.link} rel="noreferrer">{link?.linkText || link?.link}</a>)}
        </p>    
        <div className="tag-row">
          {projectData?.tags.map((tag, index) => <Tag name={tag} />)}
        </div>
      </div>
      <div className="col-md-5 project-pic-content">
        <a className={`projects-pic-container-${projectData?.id}`} target="_blank" href={projectData?.links[0].link} rel="noreferrer" title="Check it out">
        <img className="img-responsive rounded projects-pic mx-auto d-block" alt={projectData?.links[0].linkText} src={projectData?.pic}/>
        </a>
      </div>
      <hr/>
    </div>
  )
}

export default Projects;