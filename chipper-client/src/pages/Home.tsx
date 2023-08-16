import React, { useState, useEffect } from "react";
import { Product } from "../services/product"; // Make sure this path is correct
import ProductCard from "../components/ProductCard"; // Make sure this path is correct
import CheckoutButton from "../components/CheckoutButton"; // Make sure this path is correct

interface ProductType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  // Add other properties as needed
}

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    const products = await Product.getProducts();
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
