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


const ProjectData = [
  {
    title: `Male Reality Calculator`,
    description: `Developer of the popular online dating tool The Male Reality Calculator. The calculator uses U.S. Census Bureau statistics to calculate the user's odds of meeting their ideal woman.`,
    links: [
      { link: `https://realitycalc.com/`, linkText: `Realitycalc.com`, show: true },
    ],
    tags: ['React', 'Redux', 'JavaScript'],
    pic: realityCalcPic,
    alt: 'Male Reality Calculator',
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
      { link: 'https://github.com/sleighs/chat-plus', linkText: 'View on GitHub', show: true },
      { link: 'https://chrome.google.com/webstore/detail/chatplus-for-rumble/odlcomopigapcpmlpmmmhlhegajembio?hl=en&authuser=0', linkText: 'Chrome Web Store', show: true},
      { link: 'https://addons.mozilla.org/en-US/firefox/addon/chatplus-for-rumble/', linkText: 'Firefox Add-on Store', show: true}
    ],
    tags: ['JavaScript', 'WebExtensions API', 'React'],
    pic: chatplusPic,
    alt: 'ChatPlus for Rumble',
    id: 'chatplus'
  },
  {
    title: `Hero Matchups API`,
    description: `The Hero Matchups API is a character matchup and counter resource created for Blizzard's team-based first-person shooter Overwatch 2. Check out the documentation and live demo below.`,
    links: [
      { link: 'https://github.com/Sleighs/hero-matchups-api/', linkText: 'View on GitHub', show: true },
      { link: 'https://heromatchups.com/', linkText: 'Heromatchups.com', show: true }
    ],
    tags: ['MongoDB', 'JavaScript',  'React'],
    pic: heromatchupsPic,
    alt: 'Hero Matchups API',
    id: 'heromatchups'
  },
  // {
  //   title: `YouTube Playlist Web Scraper`,
  //   description: `A Node.js web scraper that retrieves the information of each video in a YouTube playlist with Puppeteer and saves the data in a json file.`,
  //   links: [
  //     { link: 'https://github.com/Sleighs/youtube-playlist-web-scraper/', linkText: 'View on GitHub', show: true },
  //     { link: 'https://github.com/Sleighs/youtube-playlist-downloader/', linkText: 'Check out the YouTube playlist downloader here', show: true },
  //   ],
  //   tags: ['Web Scraper', 'Node.js', 'JavaScript'],
  //   pic: ytpwebscraperPic,
  //   alt: 'YouTube Playlist Web Scraper',
  //   id: 'yt-playlist-webscaper'
  // },
  {
    title: `YouTube Playlist Downloader`,
    description: `A Node.js web scraper that downloads each video in a YouTube playlist, using Puppeteer to collect the videos and ytdl-core to download them.`,
    links: [
      { link: 'https://github.com/Sleighs/youtube-playlist-downloader/', linkText: 'View on GitHub', show: true },
      { link: 'https://github.com/Sleighs/youtube-playlist-web-scraper/', linkText: 'Check out the YouTube playlist scraper here', show: true },
    ],
    tags: ['Web Scraper', 'Node.js', 'JavaScript'],
    pic: ytpwebscraperPic,
    alt: 'YouTube Playlist Downloader',
    id: 'yt-playlist-downloader'
  },
  {
    title: `Mint 2048`,
    description: `Mint is a sliding tile puzzle game based on 2048 by Gabriele Cirulli where players combine tiles, perform combos and use special abilities to create the 2048 tile.`,
    links: [
      { link: 'https: //github.com/sleighs/mint-2048', linkText: 'View repository', show: true },
      { link: 'https://plus-7ed02.web.app/', linkText: 'Play Mint 2048', show: true }
    ],
    tags: ['React', 'JavaScript', 'CSS'],
    pic: mintPic,
    alt: 'Mint 2048',
    id: 'mint'
  },
  {
    title: `CashFlow JS`,
    description: `CashFlow JS is an adaptation of the CashFlow 101 board game with additional gameplay options and rule customization that allows for many unique ways to play.`,
    links: [
      {
        link: 'https://github.com/Sleighs/CashFlowJS', linkText: 'Play CashFlow JS', show: true
      },
      { link: 'https://sleighs.github.io/CashFlowJS/', linkText: 'View on GitHub', show: true },

      { link: 'https://github.com/Sleighs/cashflow-mobile ', linkText: 'CashFlowJs for Mobile repository', show: true }
    ],
    tags: ['JavaScript', 'JQuery', 'CSS', 'React Native'],
    pic: cashflowPic,
    alt: 'CashFlow JS',
    id: 'cashflow'
  }
];


const Projects = (props) => {
    const { setPageLocation, projectsToDisplay } = useContext(DataContext);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [inView, setInView] = useState(false);

    const hiddenRef = useRef();

    useEffect(() => {
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    
    const scrollHandler = () => {
      if (window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop + 125) {
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
      // if (hiddenRef?.current) {
      //   const top = hiddenRef.current.getBoundingClientRect().top;
      //   const windowHeight = window.innerHeight;
      //   if (top < windowHeight + 250) {
      //     setInView(true);
      //   } else {
      //     setInView(false);
      //   }
      // }
    }, [scrollPosition]);

    return (
      <div id="projects-container" ref={hiddenRef}>
        {ProjectData.map((project, index) => {
          if (project?.id) {
            return (
              <Project projectIndex={index} projectData={project} />
            )
          } else { 
            return <></>}
        })} 
      </div>
  )
}


const Project = (props) => {
  const { projectData, projectIndex } = props;
  
  const { projectsToDisplay } = useContext(DataContext);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [inView, setInView] = useState(true);

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
      const bottom = ref.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      if (top < windowHeight + windowHeight * .2) {
        //setInView(true);
      } else {
        //setInView(false);
      }
      console.log('bottom', bottom, windowHeight);
      if (windowHeight - bottom > bottom * .9) {
        //setInView(false);
      }
    }
  }, [scrollPosition]);

  return (
    <div className={`row project-${projectData.id} ${projectIndex % 2 === 0 ? 'project-left-slide' : 'project-right-slide'} ${inView ? 'project-in-view' : ''}`} 
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

        {projectData?.links.map((link, index) => 
        <p className="project-description__link"><a key={index} target="_blank" href={link?.link} rel="noreferrer">{link?.linkText || link?.link}</a></p> )}
     
        <div className="tag-row">
          {projectData?.tags.map((tag, index) => <Tag name={tag} />)}
        </div>
      </div>

      <div className="col-md-5 project-pic-content">
        <a className={`projects-pic-container-${projectData?.id}`} target="_blank" href={projectData?.links[0].link} rel="noreferrer" title="Check it out">
        <img className="img-responsive rounded projects-pic mx-auto d-block" alt={projectData?.alt} src={projectData?.pic}/>
        </a>
      </div>
      <hr/>
    </div>
  )
}

export default Projects;