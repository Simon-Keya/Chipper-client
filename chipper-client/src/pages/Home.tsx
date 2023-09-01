import React, { useState, useEffect } from "react";
import { product } from "../services/product"; // Use 'product' instead of 'Product'
import ProductCard from "../components/ProductCard";
import CheckoutButton from "../components/CheckoutButton";

interface ProductType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string; // Add the missing 'description' property
  // Add other properties as needed
}

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    const products = await product.getProducts(); // Use 'product.getProducts()'
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        {products.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <CheckoutButton />
    </div>
  );
};

export default Home;
