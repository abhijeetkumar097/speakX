import React from "react";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBox;
