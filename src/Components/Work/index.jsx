import React, { useRef, useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './style.css';
import Tag from '../Tag';

const Work = () => {
    const projects = [
        {
            title: 'Bravo Burrito',
            description: 'Developed a responsive and attractive landing page for a local burrito restaurant, focusing on high-quality imagery and user-friendly design.',
            tech: ['Liquid', 'CSS', 'JavaScript'],
            link: 'https://thebravoburrito.com/',
        },
        {
            title: 'Blockquiry',
            description: 'Created a visualization tool for tracking cryptocurrency transactions, utilizing dynamic charts and real-time data updates.',
            tech: ['React', 'Node.js', 'D3'],
            link: 'https://blockquiry.com/',
        },
    ];

    const { theme } = useContext(ThemeContext);
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    // // Scroll to section of selected nav item
    // const scrollTo = (id) => {
    //     const section = document.getElementById(id);
    //     section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // };

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
      if (ref.current) {
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
        <section id="work" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5 section-subtitle work-title">Work I've Done</h2>
                <ul className="list-unstyled" ref={ref}>
                    {projects.map((project, index) => (
                        <li
                            className={`media mb-4 project-card ${inView ? 'in-view' : ''}`}
                            key={index}
                        >
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">{project.title}</h5>
                                <p>{project.description}</p>
                                <a href={project.link} className="btn btn-link" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                                <div>
                                  {project.tech.map((tech, index) =>  <Tag name={tech}/> )}
                                </div> 
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="row" ref={ref}>
                    {projects.map((project, index) => (
                        <div
                            className={`col-md-6 mb-4 project-card ${inView ? 'in-view' : ''}`}
                            key={index}
                        >
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        View Project
                                    </a>
                                    <div>
                                      {project.tech.map((tech, index) =>  <Tag name={tech}/> )}
                                    </div>  
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
