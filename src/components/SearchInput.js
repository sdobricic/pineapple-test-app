import React from "react";

const SearchInput = ({ searchTerm, onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Search posts'
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
