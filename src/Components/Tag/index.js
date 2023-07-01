import React, { useState, useEffect } from 'react'

export default function Tag(props) {
  const {
    name
  } = props

  const [borderColor, setBorderColor] = useState('lightgray')

  const getBorderColor = (n) => {

    switch (n) {
      case 'React':
        setBorderColor('#61dafb')
        return
      case 'JavaScript':
        setBorderColor('#f0db4f')
        return
      case 'React Native':
        setBorderColor('#red')
        return
      case 'CSS':
        setBorderColor('lightgreen')
        return
      case 'JQuery':
        setBorderColor('orange')
        return
      case 'Redux':
        setBorderColor('#CE65B0 ')
        return
      case 'MongoDB':
        setBorderColor('rgb(154, 217, 111)')
        return

      default:
        setBorderColor('gray')
        return
    }  
  }

  useEffect(() => {
    getBorderColor(name)
  }, [])

  return (
    <div className='tag-container'
      style={{
        display:'inline-block',
        borderRadius: '5px',
        margin: '1%',
        padding: '1% 2%',
        border: `solid 2pt ${borderColor}`,
      }}>
      <div style={{ }}>
        {name}
      </div>
    </div>
  )
}
