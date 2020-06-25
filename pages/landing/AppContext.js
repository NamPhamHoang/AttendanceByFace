import React, { useState } from "react";
const defaultValue = { name: "user" };
const ThemeContext = React.createContext(defaultValue);

const AppProvider = (props) => {
  const objectCodes = [{id:1, title:"ddat"},{id:2, title:"bshbad"},{id:3, title:"mdasby"}]
  const [states, setStates] = useState({
                                        objectCodes : objectCodes,
                                        redCheck:false,
                                    })
 
  // const [state, setState] = useState(1);
  // viet chuc nang search
  const handleChangeSearch = event => {
    const filter = event.target.value
    const items = objectCodes.filter((data)=>{
      if(filter == null)
          return data
      else if(data.title.toLowerCase().includes(filter.toLowerCase())){
          return data
      }
    })
    setStates({...states, objectCodes: items})
  };
  
  
  
  return (
    <ThemeContext.Provider value={{states, 
                                  setStates, 
                                  handleChangeSearch
                                  }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
export { AppProvider };
