import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge"; // Import Badge directly

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Your cart count update logic here
    // For example, fetching the cart count from an API
    const fetchCartCount = async () => {
      const response = await fetch("/api/cart/count");
      const data = await response.json();
      setCartCount(data.count);
    };

    fetchCartCount();
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
      <Badge pill bg="danger"> {/* Use 'bg' instead of 'variant' */}
        {cartCount}
      </Badge>
    </div>
  );
};

export default CartIcon;
