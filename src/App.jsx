import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Nav } from './Components';

import './App.css';
import './App-mobile.css';
import './App-theme.css';

import { HomePage } from './Pages';
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
      </Routes>
      
      <Footer />
      <div className='app-container hidden'></div>
    </div>
  )
}

export default App;


