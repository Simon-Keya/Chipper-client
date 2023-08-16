import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../services/product';
import ProductCard from '../components/ProductCard'; // Fix import

interface ProductDetailProps {
  /* Define any props if needed */
}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productData, setProductData] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await product.getProductById(productId);
        setProductData(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {productData ? (
        <ProductCard
          name={productData.name}
          imageUrl={productData.imageUrl}
          price={productData.price}
          id={productData.id}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;

interface ProductType {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  /* Define other properties as needed */
}
