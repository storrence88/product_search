import React from 'react';

const ProductCategoryRow = (props) => {
  const category = props.category;

  return (
    <tr className='border px-4 py-2'>
      <th colSpan='2'>{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
