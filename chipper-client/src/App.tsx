import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Routes from "./Routes";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Get the user's login status from the API.
    const fetchUser = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setIsLoggedIn(data.isLoggedIn);
    };
    fetchUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
