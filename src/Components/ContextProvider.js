import React, { useReducer } from 'react';
import { CartReducer, initialState } from './Cart/CartReducer';

export const MyContext = React.createContext(initialState);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
