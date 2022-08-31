import React, { useState, useEffect, useContext } from 'react';
import "./Cart.styles.css";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../ContextProvider';

import CartTable from './CartTable';

import { Typography } from '@mui/material';
import { Button } from '@mui/material';

function Cart() {
  const { state, dispatch } = useContext(MyContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (state.products.length > 0) setProducts(state.products);
    else setProducts([]);
  }, [products, state.products]);

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'});
  }
  return (
    <>
      {products?.length !== 0 ? (
        <>
          <CartTable products={products} />
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100vw'}}>
          <Button className="clear-cart-button" onClick={() =>{clearCart()}}>Clear Cart</Button>
          <Button className="checkout-button" onClick={() =>{navigate('/payment')}}>Checkout</Button>
          </div>
        </>
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
