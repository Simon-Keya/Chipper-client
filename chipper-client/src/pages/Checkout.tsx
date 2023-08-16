import React from "react"; // Make sure to import React
import CheckoutButton from "../components/CheckoutButton"; // Make sure this path is correct

const CheckoutPage = () => {
  const handleOrderSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle order submission here
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleOrderSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        {/* Add more input fields here */}
        <button type="submit">Place Order</button>
      </form>
      <CheckoutButton />
    </div>
  );
};

export default CheckoutPage;
