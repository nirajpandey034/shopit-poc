import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './Components/Index';
import Home from './Components/Home';
import Cart from './Components/Cart/Cart';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import NavBar from './Components/NavBar';

import ContextProvider from './Components/ContextProvider';
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="shop" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
