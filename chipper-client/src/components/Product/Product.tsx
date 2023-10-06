import React, { useState } from 'react';
import './Product.scss';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, name, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const addToCart = () => {
    // Logic to add the product to the cart
    console.log(`Added ${quantity} ${name} to the cart.`);
  }

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <div className="quantity-controls">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
