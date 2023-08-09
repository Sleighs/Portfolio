import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Nav } from './Components';

import './App.css';
import './App-theme.css';
import './App-mobile.css';

import { HomePage, ProjectsPage, AboutPage, WorkPage, ContactPage, SkillsPage, TestPage } from './Pages';
import { DataContext } from './Context/DataContext';
import { ThemeContext } from './Context/ThemeContext';

const App = (props) => {
  const { pageLocation, setPageLocation } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div id='app' className={`app-${theme}`}>
      
        <Nav 
          pageLocation={pageLocation} 
          setPageLocation={setPageLocation}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/*
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test" element={<TestPage />} />
          */}
          
        </Routes>
        
        <Footer />
      <div className='app-container hidden'></div>
    </div>
  )
}

export default App;


