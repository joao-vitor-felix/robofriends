import React from "react";
import "../sass/SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="inputDiv">
      <input type="search" placeholder="Search your friend" onChange={searchChange} className="inputSearch" />
    </div>
  );
};

export default SearchBox;
