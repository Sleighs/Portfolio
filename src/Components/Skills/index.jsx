import React, { useContext, useEffect, useRef, useState } from 'react';
import logoPics from '../../Resources/Images/logos';
import './style.css'
import { ThemeContext } from '../../Context/ThemeContext';
import { DataContext } from '../../Context/DataContext';
import Sparkle from '../Sparkle';

const Skills = (props) => {
  const { setPageLocation } = useContext(DataContext)

  const hiddenRef = useRef(null);

  const [frontEndSkills, setFrontEndSkills]	= useState([
	'JavaScript',
  'TypeScript',
	'React',
	'Redux',
	'HTML5',
	'CSS3',
	'Sass',
	'Bootstrap',
  ])
  const [backEndSkills, setBackEndSkills] = useState([
	'MongoDb',
	'Node',
	'Python',
	'Firebase'
  ])
  const [otherSkills, setOtherSkills] = useState([
	'Git',
	'AdobeXD',
	'Photoshop',
	'Linux',
	'Jest'
  ])

  useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = () => {
		if(window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop + 125) {
			setPageLocation('about')
		}
  }

  return (
	<div className="container container-md" id="skills-container" ref={hiddenRef}>
		<div className="skills__list" id="skills-list1">
		<h3 className="section-subtitle skills__title">Front-end</h3>
		<div className="skills__front-end">
			{
				frontEndSkills.map((item, index) => <SkillBox name={item} key={index}/>)
			}
		</div>
	  </div>
	  <div className="skills__list" id="skills-list2">
		<h3 className="section-subtitle skills__title">Back-end</h3>
		<div className="skills__back-end">
			{
				backEndSkills.map((item, index) => <SkillBox name={item} key={index}/>)
			}
		</div>
	  </div>
	  <div className="skills__list" id="skills-list3">
		<h3 className="section-subtitle skills__title">Other</h3>
		<div className="skills__other">
			{
				otherSkills.map((item, index) => <SkillBox name={item} key={index}/>)
			}
		</div>
	  </div>
	</div>
  )
}


const SkillBox = (props) => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={"skills__logo-container skills__logo-container-" + theme}>
			<img className="skills__logo-img" src={logoPics[
        String(props.name).toLowerCase()
        ]} alt={props.name} />
			<span className="skills__logo-text">{props.name}</span>
		</div> 
	)
}

export default Skills;