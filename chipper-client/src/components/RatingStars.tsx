import React from "react";
import StarRating from "react-star-rating"; // Check if this is the correct import path

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <StarRating
      name="rating"
      value={rating}
      starCount={5}
      size={20}
      readonly
    />
  );
};

export default RatingStars;
