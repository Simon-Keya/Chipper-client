import React from "react";
import StarRatings from "react-star-ratings";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <StarRatings
      rating={rating}
      numberOfStars={5}
      starDimension="20px"
      starSpacing="2px"
      starRatedColor="gold"
      starEmptyColor="gray"
      starHoverColor="gold"
      // starSelectingColor="gold" // Omit this prop if it's not recognized
      changeRating={() => {}}
    />
  );
};

export default RatingStars;
