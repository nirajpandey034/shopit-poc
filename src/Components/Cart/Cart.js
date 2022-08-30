import React from "react";
import { useContext } from "react";
import { MyContext } from "../../App";

function Cart() {
  const { state } = useContext(MyContext);
  return (
    <>
      <ul>
        {state.products.map((product) => {
          return <li key={product.name}>{product.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Cart;
