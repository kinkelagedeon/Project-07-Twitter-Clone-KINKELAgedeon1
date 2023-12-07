import React, { useState } from "react";

function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="search-bar">
      <label htmlFor="search-input">Recherche</label>
      <input
        id="search-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Rechercher</button>
    </div>
  );
}

export default SearchBar;