import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar'; // Import the CustomNavbar component
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import UserProfile from './pages/UserProfile';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import './App.scss';

function App() {
  const isLoggedIn = true; // Set this value based on your app's logic
  const username = "JohnDoe"; // Replace with the actual username

  return (
    <Router>
      <div className="App">
        <CustomNavbar isLoggedIn={isLoggedIn} username={username} /> {/* Pass isLoggedIn and username props */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
