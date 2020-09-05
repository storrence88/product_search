import React from 'react';

const SearchBar = (props) => {
  return (
    <form className>
      <input
        type='text'
        className='w-full px-2'
        placeholder='Search...'
        value={props.filterText}
        onChange={(event) => props.setFilterText(event.target.value)}
      />
      <p>
        <input
          type='checkbox'
          className='m-2'
          onChange={() => props.setInStockOnly(!props.inStockOnly)}
        />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
