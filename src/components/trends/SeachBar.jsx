import React from "react"
import Search from "./../../images/Search.svg"
function SearchBar() {
  return (
   <div className="container-search">
      <div className="form-container">
          <img src={Search} alt="logo search" />
          <input className='input-search' type="text" placeholder="Search tweet"/>
      </div>
   </div>
  );
}

export default SearchBar;