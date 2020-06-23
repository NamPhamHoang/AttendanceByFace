import React, {useState} from 'react'
const defaultValue = {name:"user"}
const ThemeContext = React.createContext(defaultValue);

const AppProvider = (props) => {
  const [state, setState] = useState(1)
  return (   
    <ThemeContext.Provider value={{state, setState}}>
      {props.children}
    </ThemeContext.Provider>
  );
} 
export default ThemeContext;
export {AppProvider};
