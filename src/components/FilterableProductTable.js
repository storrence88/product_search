import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = (props) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className='mt-24 mx-auto w-1/4 object-center box-border border-4 border-gray-400 bg-gray-200'>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
        setFilterText={setFilterText}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
