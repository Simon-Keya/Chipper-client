import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import UserProfile from './pages/UserProfile';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Product from './components/Product'; // Import the Product component
import './App.scss';

function App() {
  const isLoggedIn = true; // Set this value based on your app's logic
  const username = "Simon keya"; // Replace with the actual username

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
