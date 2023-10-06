import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup } from 'react-bootstrap';
import './ProductCard.scss';


// Assuming the Product type has the following structure
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  // Other properties of a product
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    // Check if the product is already in the cart.
    const fetchIsAddedToCart = async () => {
      const response = await fetch("/api/cart/is-added", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product.id }),
      });
      const data = await response.json();
      setIsAddedToCart(data.isAddedToCart);
    };
    fetchIsAddedToCart();
  }, [product.id]);

  return (
    <CardGroup>
      <Card className="product-card">
        <Link to={`/products/${product.id}`}>
          <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
        </Link>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <button
            disabled={isAddedToCart}
            onClick={() => {
              setIsAddedToCart(true);
            }}
          >
            Add to Cart
          </button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default ProductCard;
