import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../../services/product'; 
import './ProductDetail.scss';

interface ProductType {
  id: number; // Correct the type of 'id'
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  // Define other properties as needed
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId?: string }>(); // Make 'productId' optional
  const [productData, setProductData] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId !== undefined) { // Check if 'productId' is not undefined
          const fetchedProduct = await product.getProductById(Number(productId).toString());
          setProductData(fetchedProduct);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {productData ? (
        <div className="product-detail">
          <img src={productData.imageUrl} alt={productData.name} className="product-image" />
          <h1>{productData.name}</h1>
          <p>{productData.description}</p>
          <p>Price: ${productData.price}</p>
          {/* Add any additional information or functionality related to the product */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
