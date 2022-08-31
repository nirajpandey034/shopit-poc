import './App.css';
import React, { useReducer, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './Components/Index';
import Home from './Components/Home';
import Cart from './Components/Cart/Cart';
import About from './Components/About';
import { CartReducer, initialState } from './Components/Cart/CartReducer';

const MyContext = React.createContext();
function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <MyContext.Provider value={contextValue}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="shop" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
