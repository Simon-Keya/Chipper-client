import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

interface ReviewFormProps {
  product: any; // Replace 'any' with the actual type of 'product'
}

const ReviewForm: React.FC<ReviewFormProps> = ({ product }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newReview = {
      productId: product.id,
      rating,
      comment,
    };

    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    if (response.status === 201) {
      alert("Your review has been submitted!");
    } else {
      alert("There was an error submitting your review.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          as="select"
          name="rating"
          onChange={(event) => setRating(Number(event.target.value))}
          title="Select a rating" // Add a title attribute for accessibility
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          name="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </Form.Group>
      <button type="submit">Submit Review</button>
    </Form>
  );
};

export default ReviewForm;
