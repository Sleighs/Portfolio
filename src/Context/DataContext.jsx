import React, {useState} from "react";

const DataContext = React.createContext();

function DataContextProvider(props){ 
  const [pageLocation, setPageLocation] = useState('home');
  const [projectsToDisplay, setProjectsToDisplay] = useState([ 
    'chatplus',
    //'realitycalc', 
    'heromatchups', 
    'mint', 
    'cashflow',
    //'yt-playlist-webscraper',
    'yt-playlist-downloader',
  ]);
  const [isOpen, setIsOpen] = useState(false); 
  
  const toggleForm = () => {
    setIsOpen(!isOpen);
  }

  return (
    <DataContext.Provider value={{
        pageLocation, setPageLocation,
        projectsToDisplay, setProjectsToDisplay,
        isOpen, setIsOpen,
        toggleForm
    }}>
        {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataContextProvider};