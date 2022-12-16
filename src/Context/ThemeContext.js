import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){ 
  const [theme, setTheme] = useState('dark');
  const [lightbulb, setLightbulb] = useState(false);
  
  const changeTheme = () => {
    if (theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  };

  return (
    <ThemeContext.Provider value={{
        theme, 
        setTheme,
        lightbulb, 
        setLightbulb,
        changeTheme
    }}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeContextProvider}