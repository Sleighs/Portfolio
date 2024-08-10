import React from 'react'

export default function HomeAbout() {
  return (
    <div>
      <div className="section-header section-header-first" id="about">
        <h3 className="section-title"><strong>About</strong></h3>
      </div>
      <p className="about__text" style={{
        width: isMobile ? '90%' : '65%',
        height: 'fit-content',
        margin: '5% auto 12% auto',
        fontSize: isMobile ? '1.2em' : '1.5em',
      }}>
        With a dedication to a philosophy of lifelong learning, I'm a full stack developer with a strong passion passion for all facets of web development. The blend of creativity, logic, and endless opportunities for discovery fuels my enthusiasm for this field. When I step away from coding, I like to immerse myself in reading, playing music, and staying fit.
      </p>
    </div>
  )
}
