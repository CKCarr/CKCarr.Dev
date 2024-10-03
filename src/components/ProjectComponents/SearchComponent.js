import React from 'react';

function SearchComponent({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="form-control "
      placeholder="Search Projects"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchComponent;
