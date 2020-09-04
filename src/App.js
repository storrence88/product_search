import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import products from './products';

function App() {
  return (
    <div className='container mx-auto'>
      <FilterableProductTable products={products} />
    </div>
  );
}

export default App;
