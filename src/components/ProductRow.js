import React from 'react';

const ProductRow = (props) => {
  const name = props.product.stocked ? (
    props.product.name
  ) : (
    <span style={{ color: red }}>{props.product.name}</span>
  );
  const price = props.product.price;

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
