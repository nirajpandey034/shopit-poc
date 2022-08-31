export let initialState = {
  products: [],
};
export const CartReducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case 'ADD_TO_CART': {
      let products = state.products;
      if (
        !products.find((prod) => {
          return prod.id === action.payload.id; //check whether product alreadt is already in cart
        })
      ) {
        products.push(action.payload);
        return { products: products };
      }
      return state;
    }
    default: {
      return state;
    }
  }
};
