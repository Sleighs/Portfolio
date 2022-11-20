import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './Components';

import './App.css'
import { HomePage, ProjectsPage, AboutPage, WorkPage, ContactPage } from './Pages';
import { DataContext } from './Context/DataContext';

const App = (props) => {
  const {pageLocation, setPageLocation} = useContext(DataContext)

  return (
    <div id='app-container'>
      <div className='nav-location'>
        <div className='nav-location__title'>
          <span className='nav-location__title1'>{`${pageLocation}`}</span>
          <span className='nav-location__title2'>{' // samuelwright.dev'}</span>
        </div>
        <Nav pageLocation={pageLocation} setPageLocation={setPageLocation}/>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App;


