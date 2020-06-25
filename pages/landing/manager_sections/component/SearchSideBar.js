import React from "react";
import ThemeContext from '../../AppContext'
export default function SearchSideBar() {
  const {handleChangeSearch} = React.useContext(ThemeContext)
  return (
    <div className="py-3">
      <div className="md-form active-cyan active-cyan-2 mb-3">
        <input
          className="form-control input-cus"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange= {(e)=>handleChangeSearch(e)}
        />
      </div>
    </div>
  );
}
