import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';

export default function Crypt() {
  const  { changeTheme } = useContext(ThemeContext);

  const [code, setCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted', code)
    if (
      code === 'lights' 
      || code === 'light'
      || code === 'darkmode'
      || code === 'dark'
      || code === 'dark mode'
    ){
      changeTheme()
    }
  }
  
  const handleCodeChange = (e) => {
    setCode(e.target.value)
  }

  return (
    <div className="crypt__container" style={{
      margin: '0 auto 1% auto',
    }}>
      <form className="crypt__form" onSubmit={handleSubmit}> 
        <input 
          className="crypt__form-input" 
          style={{
            padding: '2px 7px 0 7px',
          }}
          type="text" 
          value={code} 
          onChange={handleCodeChange}
          placeholder='Enter code'
        />
      </form>
    </div>
  )
}
