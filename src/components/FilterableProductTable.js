import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import '../FilterableProductTable.css';

const FilterableProductTable = (props) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className='FilterableProductTable'>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} setFilterText={setFilterText} />
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
