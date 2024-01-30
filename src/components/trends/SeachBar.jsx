import React from "react"
import Vector from "./../../images/Vector.svg"
function SearchBar() {
  return (
   <div className="container-search">
      <div className="form-container">
          <img src={Vector} alt="logo search" />
          <input className='input-search' type="text" placeholder="Search tweet"/>
      </div>
   </div>
  );
}

export default SearchBar;