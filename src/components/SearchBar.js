// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ handleSearche, handleSearchd }) => {
  const [searchInpute, setSearchInpute] = useState('');
  const [searchInputd, setSearchInputd] = useState('');

  const handleSearchClicke = () => {
    handleSearche(searchInpute);
  };

  const handleSearchClickd = () => {
    handleSearchd(searchInputd);
  };

  return (
    <>
      <div class="input-group rounded">
      <input
  type="text"
  class="form-control rounded"
  placeholder="Search by expenses"
  aria-label="Search"
  aria-describedby="search-addon"
  value={searchInpute} // Assuming searchInpute is your state variable
  onChange={(e) => setSearchInpute(e.target.value)}
/>

  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search" onClick={handleSearchClicke}></i>
  </span>
</div>
<div class="input-group rounded">
<input
  type="text"
  class="form-control rounded"
  placeholder="Search by date"
  aria-label="Search"
  aria-describedby="search-addon"
  value={searchInputd} // Assuming searchInpute is your state variable
  onChange={(e) => setSearchInputd(e.target.value)}
/>

  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search" onClick={handleSearchClickd}></i>
  </span>
</div>
    </>
  );
};

export default SearchBar;

