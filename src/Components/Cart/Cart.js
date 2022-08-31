import React from 'react';
import { useContext } from 'react';
import {MyContext } from '../ContextProvider';

import CartTable from './CartTable'

function Cart() {
  const { state} = useContext(MyContext);
  return (
    <>
      <CartTable products={state.products}/>
    </>
  );
}

export default Cart;
