import React from 'react';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
  return (
    <div>
      <ProductTable products={props.products} />
    </div>
  );
};

export default FilterableProductTable;
