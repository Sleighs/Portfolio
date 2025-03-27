import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import { DataContext } from '../../Context/DataContext';

export default function Crypt() {
  const  { changeTheme } = useContext(ThemeContext);
  const { 
    projectsToDisplay, 
    setProjectsToDisplay 
  } = useContext(DataContext)

  const [code, setCode] = useState('')
  const [placeHolder, setPlaceHolder] = useState('Enter code')
  const [failCount, setFailCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let success = false;
    const submitted = code

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

    if (submitted === 'help') {
      success = true;
      console.table({
        help: 'list codes in console',  
        lights: 'toggle light/dark mode',        
      })
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

      // If 3 failed attempts, display hint
      if (failCount > 3) {
        setTimeout(() => {
          setPlaceHolder(`Try 'help'`)
        }, 2750)
        setTimeout(() => {
          setPlaceHolder(`Enter code`)
        }, 9000)
      } else {
         setTimeout(() => {
          setPlaceHolder('Enter code')
          //setCode(submitted)
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
    <div className="crypt__container" style={{
      margin: '2% auto 1% auto',
    }}>
      <form className="crypt__form" onSubmit={handleSubmit}> 
        <input 
          className="crypt__form-input" 
          style={{
            padding: '2px 7px 0 7px',
            width: 200,
          }}
          type="text" 
          value={code} 
          onChange={handleCodeChange}
          placeholder={placeHolder}
        />
      </form>
    </div>
  )
}
