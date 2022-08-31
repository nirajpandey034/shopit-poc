import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { MyContext } from '../ContextProvider';

import CartTable from './CartTable';

function Cart() {
  const { state } = useContext(MyContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (state.products.length > 0) setProducts(state.products);
  }, [products, state.products]);
  return (
    <>{products?.length !== 0 ? <CartTable products={products} /> : null}</>
  );
}

export default Cart;
