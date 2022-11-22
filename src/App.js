import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './Components';

import './App-theme.css'
import './App.css'

import { HomePage, ProjectsPage, AboutPage, WorkPage, ContactPage, SkillsPage } from './Pages';
import { DataContext } from './Context/DataContext';
import { ThemeContext } from './Context/ThemeContext';

const App = (props) => {
  const { pageLocation, setPageLocation } = useContext(DataContext)
  const { theme } = useContext(ThemeContext)
  
  return (
    <div id='app' className={`app-${theme}`}>
      <div className='app-container'>
        <div className='nav-location'>
          <div className='nav-location__title'>
            <span className='nav-location__title-red'>{`${pageLocation}`}</span>
            <span className='nav-location__title'>{' // '}</span>
            <span className='nav-location__title'>{'samuelwright.dev'}</span>
          </div>
          <Nav pageLocation={pageLocation} setPageLocation={setPageLocation}/>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;


