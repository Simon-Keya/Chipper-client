declare module 'react-star-rating' {
    interface StarRatingProps {
      name: string;
      totalStars: number;
      starSize: number;
      rating: number;
      readOnly?: boolean;
      onChange?: (rating: number) => void;
      onRatingClick?: (rating: number) => void;
      onHover?: (rating: number) => void;
      onHoverOut?: () => void;
      renderStarIcon?: (
        index: number,
        rating: number,
        name: string,
        onClick: (event: React.MouseEvent<HTMLElement>) => void
      ) => React.ReactNode;
      renderStarIconHalf?: (
        index: number,
        rating: number,
        name: string,
        onClick: (event: React.MouseEvent<HTMLElement>) => void
      ) => React.ReactNode;
    }
  
    const StarRating: React.FC<StarRatingProps>;
    export default StarRating;
  }
  