import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { Components } from "./styled";
import StarRating from "../StarRating";
import Reviews from "./components/Reviews";

const ProductDetails = () => {
  const product = useSelector(
    (state: RootState) => state.productDetails.product
  );

  return (
    <Components.Container>
      {product && (
        <>
          <Components.LeftWrapper>
            <Components.TopWrapper>
              <Components.Title>{product.title}</Components.Title>
              <Components.CostContainer>
                <Components.Price>${product.price}</Components.Price>
                <Components.DiscountPercentage>
                  -{product.discountPercentage}%
                </Components.DiscountPercentage>
              </Components.CostContainer>
            </Components.TopWrapper>
            <Components.ImageContainer>
              <Components.Image src={product.thumbnail} />
              <Components.FullScreenButton />
            </Components.ImageContainer>
            <Components.Description>
              {product.description}
            </Components.Description>
            <Components.DimensionList>
              <Components.DimensionItem>
                <p>Width</p>
                <p>{product.dimensions.width} cm</p>
              </Components.DimensionItem>
              <Components.DimensionItem>
                <p>Height</p>
                <p>{product.dimensions.height} cm</p>
              </Components.DimensionItem>
              <Components.DimensionItem>
                <p>Depth</p>
                <p>{product.dimensions.depth} cm</p>
              </Components.DimensionItem>
            </Components.DimensionList>
            <Components.Weight>Weight: {product.weight} kg</Components.Weight>
          </Components.LeftWrapper>
          <Components.RightWrapper>
            <StarRating rating={product.rating} />
            <Reviews />
          </Components.RightWrapper>
        </>
      )}
    </Components.Container>
  );
};

export default ProductDetails;
