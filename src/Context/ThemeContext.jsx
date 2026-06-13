import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){ 
  const [theme, setTheme] = useState('dark');
  const [lightbulb, setLightbulb] = useState(false);
  
  const changeTheme = (type) => {
    if (type) {
      setTheme(type)
    } else if (theme === 'dark'){
      setTheme('light')
    } else {
      setTheme('dark')
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