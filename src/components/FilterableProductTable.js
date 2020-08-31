import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import '../FilterableProductTable.css';

const FilterableProductTable = (props) => {
  return (
    <div className='FilterableProductTable'>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
};

export default FilterableProductTable;
