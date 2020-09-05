import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (!product.name.toLowerCase().includes(props.filterText.toLowerCase())) {
      return;
    }
    if (props.inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={[product.category]} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className='table-fixed border-separate mx-auto'>
      <thead>
        <tr>
          <th className='px-4 py-2'>Name</th>
          <th className='px-4 py-2'>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
