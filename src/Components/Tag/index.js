import React from 'react'

export default function Tag(props) {
  const {
    name
  } = props

  //get color


  return (
    <div className='tag-container'
      style={{
        display:'inline-block',
        borderTopLeftRadius: '25%',
        borderTopRightRadius: '25%',
        borderBottomLeftRadius: '25%',
        borderBottomRightRadius: '25%',
        margin: '1%',
        padding: '1% 2%',
        backgroundColor: 
          name === 'react' ? 'lightblue' :
          name === 'redux' ? 'lightyellow' :
            'lightgray',
        
      }}>
      <div style={{
        
        
      }}>
        {'#'+name}
      </div>
    </div>
  )
}
