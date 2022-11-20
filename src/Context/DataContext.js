import React, {useState} from "react"

const DataContext = React.createContext()

function DataContextProvider(props){ 
  const [pageLocation, setPageLocation] = useState('home')

  return (
    <DataContext.Provider value={{
        pageLocation, setPageLocation
    }}>
        {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataContextProvider}