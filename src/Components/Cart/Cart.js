import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../ContextProvider';

import CartTable from './CartTable';

import { Typography } from '@mui/material';

function Cart() {
  const { state } = useContext(MyContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (state.products.length > 0) setProducts(state.products);
  }, [products, state.products]);
  return (
    <>
      {products?.length !== 0 ? (
        <CartTable products={products} />
      ) : (
        <>
          <Typography>
            Nothing in here. Add something awesome in your cart
          </Typography>
          <Typography
            variant="body1"
            element="a"
            style={{
              textAlign: 'center',
              color: 'blue',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
            onClick={() => {
              navigate('/shop');
            }}
          >
            Keep Shopping
          </Typography>
        </>
      )}
    </>
  );
}

export default Cart;
