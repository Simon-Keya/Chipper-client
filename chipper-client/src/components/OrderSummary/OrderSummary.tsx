import React from "react";
import { Table } from "react-bootstrap";
import './OrderSummary.scss';


interface Product {
  id: number;
  name: string;
  price: number;
  // Define other properties of a product here
}

interface OrderSummaryProps {
  products: Product[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ products }) => {
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>${product.price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${totalPrice}</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default OrderSummary;
