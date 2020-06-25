import React, { useState } from "react";
const defaultValue = { name: "user" };
const ThemeContext = React.createContext(defaultValue);

const AppProvider = (props) => {
  
  const [objectCodes, setObjectCodes] = useState(["CDIO", "Testing"])
  const [search, setSearch] = useState({
    objectCodes : objectCodes,
    redCheck:false,
})
  const [state, setState] = useState(1)
  const [amount, setAmount] = useState(1)
  const handleChangeSearch = event => {
    const filter = event.target.value
    const items = objectCodes.filter((data)=>{
      if(filter == null)
          return data.class_name
      else if(data.class_name.toLowerCase().includes(filter.toLowerCase())){
          return data.class_name
      }
    })
    setSearch({...search  , objectCodes: items})
  };
  return (   
    <ThemeContext.Provider value={{state, setState, amount, setAmount, search, setSearch, objectCodes, setObjectCodes, handleChangeSearch}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
export { AppProvider };
