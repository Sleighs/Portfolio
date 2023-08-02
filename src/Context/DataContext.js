import React, {useState} from "react"

const DataContext = React.createContext()

function DataContextProvider(props){ 
  const [pageLocation, setPageLocation] = useState('home')
  const [projectsToDisplay, setProjectsToDisplay] = useState([
    'chatplus', 
    //'realitycalc', 
    'heromatchups', 
    'mint', 
    'cashflow'
  ])

  return (
    <DataContext.Provider value={{
        pageLocation, setPageLocation,
        projectsToDisplay, setProjectsToDisplay,
    }}>
        {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataContextProvider}