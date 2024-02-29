import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Checkout from './pages/Checkout/Checkout';
import UserProfile from './pages/UserProfile/UserProfile';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';// Import the Product component

import './App.scss';
import  './components/Navbar/Navbar.scss';
import  './pages/Home/Home.scss';
import './pages/ProductDetail/ProductDetail.scss';
import './pages/Checkout/Checkout.scss';
import  './pages/UserProfile/UserProfile.scss';
import  './pages/Cart/Cart.scss';
import   './components/Footer/Footer.scss';
import  './components/Product/Product.scss'; // Import the Product component



function App() {
  const isLoggedIn = true; // Set this value based on your app's logic
  const username = "Simon Keya"; // Replace with the actual username

  return (
    <Router>
      <div className="App">
        <CustomNavbar isLoggedIn={isLoggedIn} username={username} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product id={1} name="Sample Product" description="Sample Description" price={10.99} />} />
          {/* Replace the above line with actual data or dynamic data */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
