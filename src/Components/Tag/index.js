import React, { useState, useEffect } from 'react'

export default function Tag(props) {
  const {
    name
  } = props

  return (
    <div className='tag-container'
      style={{
        display:'inline-block',
        borderRadius: '5px',
        margin: '1%',
        padding: '1% 2%',
        border: `solid 2pt ${
          name === 'React' ? '#6DC3F6' :
          name === 'JavaScript' ? '#f0db4f' :
          name === 'React Native' ? 'red' :
          name === 'CSS' ? '#5FF78D' :
          name === 'JQuery' ? 'orange' :
          name === 'Redux' ? '#CA79C2 ' :
          name === 'MongoDB' ? '#99CC46' :
          'rgb( 153, 185, 190)'
        }`,
      }}>
      <div>
        {name}
      </div>
    </div>
  )
}
