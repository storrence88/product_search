import React from 'react';

const SearchBar = (props) => {
  return (
    <form>
      <input
        type='text'
        placeholder='Search...'
        value={props.filterText}
        onChange={(event) => props.setFilterText(event.target.value)}
      />
      <p>
        <input type='checkbox' onChange={() => props.setInStockOnly(!props.inStockOnly)} />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
