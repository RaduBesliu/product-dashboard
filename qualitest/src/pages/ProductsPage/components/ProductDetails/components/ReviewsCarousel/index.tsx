import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarRating from "../../../StarRating";
import { ReviewDto } from "../../../../../../api/types.dto";
import { Components } from "./styled";

interface ReviewsCarouselProps {
  reviews: ReviewDto[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adjustHeight: true,
  accessibility: true,
};

const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  if (reviews.length === 0) {
    return <p>No reviews available</p>;
  }

  return (
    <Components.Container>
      <Components.Title>Reviews</Components.Title>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Components.SliderItem
            key={index}
            style={{ padding: "10px", textAlign: "center" }}
          >
            {/* no review id :( */}
            <Components.Comment style={{ fontStyle: "italic" }}>
              "{review.comment}"
            </Components.Comment>
            <StarRating rating={review.rating} />
            <Components.Reviewer>- {review.reviewerName}</Components.Reviewer>
            <Components.Date>
              {new Date(review.date).toLocaleDateString()}
            </Components.Date>
          </Components.SliderItem>
        ))}
      </Slider>
    </Components.Container>
  );
};

export default ReviewsCarousel;
