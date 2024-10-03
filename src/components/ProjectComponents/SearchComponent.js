import React from 'react';

function SearchComponent({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="form-control text-dark border-6 border-darkcyan hover:border-plum"
      placeholder="Search Projects"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchComponent;
