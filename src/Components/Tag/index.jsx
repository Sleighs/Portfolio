import React from 'react'

export default function Tag(props) {
  const {
    name
  } = props

  return (
    <div className='tag-container'
      style={{
        display:'inline-block',
        position: 'relative',
        borderRadius: '5px',
        margin: '1%',
        padding: '1% 2%',
        zIndex: 5,
        border: `solid 2pt ${
          /*
           Colors
            'rgb(30, 85, 243  )' - blue
            'rgb(64, 88, 193)' - blue-indigo
            '#6DB35A' - nodejs green

          */

          name === 'React' ? '#6DC3F6' :
          name === 'CSS' ? '#f0db4f' :
          name === 'React Native' ? 'red' :
          name === 'JavaScript' ? '#5FF78D' :
          name === 'JQuery' ? 'orange' :
          name === 'Redux' ? '#CA79C2 ' :
          name === 'MongoDB' ? '#99CC46' :
          name === 'Node.js' ? 'rgb(30, 85, 243)' :
          name === 'Puppeteer' ? 'rgb(64, 88, 193)':
          name === 'Express' ? 'rgb(30, 85, 243)' :
          name === 'D3' ? 'orange' :
          //name === 'Liquid' ? 'rgb(30, 85, 243)' :
          'rgb( 153, 185, 190)'
        }`,
      }}>
      <div>
        {name}
      </div>
    </div>
  )
}
