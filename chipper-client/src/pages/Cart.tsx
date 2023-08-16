import React, { useState, useEffect } from "react";
import { Product } from "../services/product"; // Make sure this path is correct
import { cart } from "../services/cart";
import CheckoutButton from "../components/CheckoutButton"; // Make sure this path is correct

interface ProductType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  // Add other properties as needed
}

const Cart = () => {
  const [productsInCart, setProductsInCart] = useState<ProductType[]>([]);

  const getProductsInCart = async () => {
    const products = await Product.getProducts();
    const productsInCart = await cart.getProductsInCart();

    setProductsInCart(products.filter((product) => productsInCart.includes(product.id)));
  };

  useEffect(() => {
    getProductsInCart();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {productsInCart.map((product: ProductType) => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => cart.removeFromCart(product.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <CheckoutButton />
    </div>
  );
};

export default Cart;
