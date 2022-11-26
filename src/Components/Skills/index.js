import React, { useContext, useEffect, useRef, useState } from 'react';
import logoPics from '../../Resources/Images/logos';
import './style.css'
import { ThemeContext } from '../../Context/ThemeContext';
import { DataContext } from '../../Context/DataContext';

const Skills = (props) => {
  const { theme } = useContext(ThemeContext)
  const { setPageLocation } = useContext(DataContext)

  const hiddenRef = useRef();

  const [frontEndSkills, setFrontEndSkills]	= useState([
	'javascript', 
	'react',
	'redux',
	'HTML5',
	'CSS3',
	'sass',
	'bootstrap',
  ])
  const [backEndSkills, setBackEndSkills] = useState([
	'mongodb',
	'node',
	'python',
	'firebase'
  ])
  const [otherSkills, setOtherSkills] = useState([
	'git',
	'AdobeXD',
	'photoshop',
	'linux',
	'jest'
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
		<h3>Front-end</h3>
		<div className="skills__front-end">
			{
				frontEndSkills.map((item, index) => <SkillBox name={item} key={index}/>)
			}
		</div>
	  </div>
	  <div className="skills__list" id="skills-list2">
		<h3>Back-end</h3>
		<div className="skills__back-end">
			{
				backEndSkills.map((item, index) => <SkillBox name={item} key={index}/>)
			}
		</div>
	  </div>
	  <div className="skills__list" id="skills-list3">
		<h3>Other</h3>
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
			<img className="skills__logo-img" src={logoPics[props.name]} alt={props.name} />
			<span className="skills__logo-text">{props.name}</span>
		</div> 
	)
}

export default Skills;