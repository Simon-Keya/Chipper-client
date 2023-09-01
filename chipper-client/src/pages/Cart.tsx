import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cart } from "../services/cart";
import RatingStars from "../components/RatingStars";

interface CartProduct {
  product: {
    id: string;
    name: string;
    description: string;
    rating: number;
    price: number;
  };
  quantity: number;
}

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    async function fetchCartProducts() {
      try {
        const products: CartProduct[] = await cart.getProductsInCart();
        setCartProducts(products);

        const prices = products.map((item: CartProduct) => item.product.price * item.quantity);
        const totalPrice = prices.reduce((a, b) => a + b, 0);
        setTotalPrice(totalPrice);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    }

    fetchCartProducts();
  }, []);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartProducts.map((item: CartProduct, index: number) => (
        <div className="cart-item" key={index}>
          <div className="product-details">
            <h3>
              <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
            </h3>
            <p>{item.product.description}</p>
            <RatingStars rating={item.product.rating} />
            <p>Quantity: {item.quantity}</p>
          </div>
          <div className="product-price">
            <p>Price: ${item.product.price}</p>
            <p>Total: ${item.product.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="total-price">
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
