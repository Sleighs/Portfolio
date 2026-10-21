import React, { useContext, useEffect, useRef } from 'react';
import logoPics from '../../Resources/Images/logos';
import { ThemeContext } from '../../Context/ThemeContext';
import { DataContext } from '../../Context/DataContext';
import './style.css';

const skillGroups = [
  {
    title: 'Front-end Tools',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'Nextjs',
      'HTML5',
      'CSS3',
      'Sass',
      // 'Bootstrap',
    ],
  },
  {
    title: 'Back-end Tools',
    skills: ['Postgres', 'MongoDb', 'Node', 'Python', 'Firebase'],
  },
  {
    title: 'Other',
    skills: ['AdobeXD', 'Photoshop', 'Linux', 'Jest', 'Shopify', 'Git'],
  },
];

const skillLabels = {
  AdobeXD: 'Adobe XD',
  CSS3: 'CSS',
  HTML5: 'HTML 5',
  MongoDb: 'MongoDB',
  Node: 'Node.js',
  Nextjs: 'Next.js',
  Postgres: 'PostgreSQL',
};

const SkillsCompact = () => {
  const { setPageLocation } = useContext(DataContext);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (
        hiddenRef.current &&
        window.pageYOffset + window.innerHeight >=
          hiddenRef.current.offsetTop + 125
      ) {
        setPageLocation('about');
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [setPageLocation]);

  return (
    <section
      className="container container-md skills-compact"
      id="skills-container"
      ref={hiddenRef}
      aria-labelledby="skills-compact-heading"
    >
      {/* <h2
        className="section-subtitle skills__title skills-compact__heading"
        id="skills-compact-heading"
      >
        Tools I Work WIth
      </h2> */}
      {skillGroups.map(({ title, skills }) => (
        <div className="skills-compact__group" key={title}>
          <h2 className="section-subtitle skills__title skills-compact__title">
            {title}
          </h2>
          <div className="skills-compact__items">
            {skills.map((skill) => (
              <CompactSkill key={skill} name={skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const CompactSkill = ({ name }) => {
  const { theme } = useContext(ThemeContext);
  const label = skillLabels[name] || name;

  return (
    <div
      className={`skills__logo-container skills__logo-container-${theme} skills-compact__item`}
    >
      <img
        className="skills__logo-img"
        src={logoPics[name.toLowerCase()]}
        alt={label}
      />
      <span className="skills__logo-text">{label}</span>
    </div>
  );
};

export default SkillsCompact;
