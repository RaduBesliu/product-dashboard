import { Components } from "./styled";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <Components.Container>
      <Components.Stars rating={rating}>★★★★★</Components.Stars>
    </Components.Container>
  );
};

export default StarRating;
