import React from 'react';
import { useContext } from 'react';
import {MyContext } from '../ContextProvider';

function Cart() {
  const { state} = useContext(MyContext);
  return (
    <>
      <ul>
        {state.products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Cart;
