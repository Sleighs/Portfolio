import React, {useState} from "react";

const DataContext = React.createContext();

function DataContextProvider(props){ 
  const [pageLocation, setPageLocation] = useState('home');
  const [projectsToDisplay, setProjectsToDisplay] = useState([ 
    'realitycalc', 
    'chatplus',
    'heromatchups', 
    'mint', 
    'cashflow',
    //'yt-playlist-webscraper',
    'yt-playlist-downloader',
  ]);

  return (
    <DataContext.Provider value={{
        pageLocation, setPageLocation,
        projectsToDisplay, setProjectsToDisplay,
    }}>
        {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataContextProvider};