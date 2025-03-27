import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import { DataContext } from '../../Context/DataContext';
import './style.css'

export default function Crypt() {
  const { changeTheme } = useContext(ThemeContext);
  const { 
    projectsToDisplay, 
    setProjectsToDisplay,
    sparkleCount,
    setSparkleCount,
    sparkleSize,
    setSparkleSize
  } = useContext(DataContext);

  const [code, setCode] = useState('')
  const [placeHolder, setPlaceHolder] = useState('Enter code')
  const [failCount, setFailCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let success = false;
    const submitted = code

    // Add default values
    const DEFAULT_SPARKLE_SIZE = Math.random() * 2 + 1;
    const DEFAULT_SPARKLE_COUNT = 14;

    if (
      code === 'lights' 
      || code === 'light'
      || code === 'light mode'
      || code === 'lightmode'
      || code === 'darkmode'
      || code === 'dark'
      || code === 'dark mode'
    ){
      changeTheme()
      success = true;
    }

    // If the first 3 characters are 'set-' then change project display
    if (submitted.substring(0, 4) === 'set-') {
      // Check if project is already displayed
      if (projectsToDisplay.includes(submitted.substring(4))) {
        //console.log(submitted + 'is included')
        // remove project from display  
        setProjectsToDisplay(projectsToDisplay.filter(project => project !== submitted.substring(4)))
        success = true;
      } else {
        //console.log(submitted + 'is not included')
        // add project to display
        setProjectsToDisplay([...projectsToDisplay, submitted.substring(4)])
        success = true;
      }
    }

    if (submitted.startsWith('sparklecount-') || submitted.startsWith('count-')) {
      const count = parseInt(
        submitted.startsWith('count-') 
          ? submitted.substring(6)  // "count-" is 6 characters
          : submitted.substring(12) // "sparklecount-" is 12 characters
      );
      if (!isNaN(count) && count >= 0 && count <= 100) {
        setSparkleCount(count);
        success = true;
        console.log(`Sparkle count set to: ${count}`);
      }
    }

    if (submitted.startsWith('sparklesize-') || submitted.startsWith('size-')) {
      const size = parseFloat(
        submitted.startsWith('size-') 
          ? submitted.substring(5)  // "size-" is 5 characters
          : submitted.substring(11) // "sparklesize-" is 11 characters
      );
      if (!isNaN(size) && size >= 0.1 && size <= 100) {
        setSparkleSize(size);
        success = true;
        console.log(`Sparkle size set to: ${size}`);
      }
    }

    // Sparkle control codes
    if (
      submitted === 'sparkle size' ||
      submitted === 'sparklesize' ||
      submitted === 'size'
    ) {
      success = true;
      console.log(`Current sparkle size: ${sparkleSize}`);
      console.log("Use 'size-[0.1-100]' to adjust");
    }

    if (
      submitted === 'sparkle count' ||
      submitted === 'sparklecount' ||
      submitted === 'count'
    ) {
      success = true;
      console.log(`Current sparkle count: ${sparkleCount}`);
      console.log("Use 'count-[0-100]' to adjust");
    }

    if (submitted === 'reset size') {
      setSparkleSize(DEFAULT_SPARKLE_SIZE);
      success = true;
      console.log(`Sparkle size reset to default: ${DEFAULT_SPARKLE_SIZE}`);
    }

    if (submitted === 'reset count') {
      setSparkleCount(DEFAULT_SPARKLE_COUNT);
      success = true;
      console.log(`Sparkle count reset to default: ${DEFAULT_SPARKLE_COUNT}`);
    }

    if (submitted === 'help') {
      success = true;
      console.table({
        help: 'list codes in console',
        lights: 'toggle light/dark mode',
        'sparkle size': 'show current sparkle size',
        'sparkle count': 'show current sparkle count',
        'size-[0.1-5]': 'set sparkle size',
        'count-[0-100]': 'set number of sparkles',
        'set-[projectname]': 'toggle project visibility',
        'reset size': 'restore default sparkle size',
        'reset count': 'restore default sparkle count'
      });
    }

    // flash input field if successful
    const input = document.querySelector('.crypt__form-input')
    if (success){
      //console.log(input)
      console.log(`Code '${submitted}' was entered`)
      setPlaceHolder('Success')
      setTimeout(() => {
        setPlaceHolder('Enter code')
        //setCode(submitted)
      }, 2750)

      /*input.classList.add('crypt__form-input-flash')
      setTimeout(() => {
        input.classList.remove('crypt__form-input-flash')
      }
      , 1000)*/
      setFailCount(0)
    }
    if (!success){
      console.log(`'${submitted}' is not a valid code`)
      setPlaceHolder('Invalid code')

      // If 3 failed attempts, display sequence of hints
      if (failCount >= 2) { // Changed from > 3 to >= 2 to show on third attempt
        setTimeout(() => {
          setPlaceHolder(`Try 'help' or 'lights'`)
          console.log(`Try 'help' or 'lights'`)
        }, 2750)
        setTimeout(() => {
          setPlaceHolder(`Enter code`)
        }, 20000)
      } else {
        setTimeout(() => {
          setPlaceHolder('Enter code')
        }, 2750)
      }

      setFailCount(prev => prev + 1)
    }
    setCode('')
  }
  
  const handleCodeChange = (e) => {
    setCode(e.target.value)
  }

  return (
    <div className="crypt__container">
      <form className="crypt__form" onSubmit={handleSubmit}> 
        <input 
          className="crypt__form-input" 
          type="text" 
          value={code} 
          onChange={handleCodeChange}
          placeholder={placeHolder}
        />
      </form>
    </div>
  )
}
