import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { Components } from "./styled";
import StarRating from "../StarRating";
import ReviewsCarousel from "./components/ReviewsCarousel";
import FullScreenImage from "./components/FullScreenImage";
import AddToCartButton from "../AddToCardButton";
import AddToFavoritesButton from "../AddToFavoritesButton";
import { selectCartItems, selectFavorites } from "../../../../store/selectors";
import { addToCart } from "../../../../store/cartSlice";
import { toggleFavorite } from "../../../../store/favoritesSlice";
import { useMemo } from "react";

const ProductDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector(selectCartItems);
  const favoriteItems = useSelector(selectFavorites);
  const product = useSelector(
    (state: RootState) => state.productDetails?.product
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!product) {
      return;
    }

    dispatch(addToCart(product));

    if (favoriteItems.find((item) => item.id === product.id)) {
      dispatch(toggleFavorite(product));
    }
  };

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!product) {
      return;
    }

    if (!cartItems.find((item) => item.id === product.id)) {
      dispatch(toggleFavorite(product));
    }
  };

  const isFavorite = useMemo(() => {
    return !!favoriteItems.find((item) => item.id === product?.id);
  }, [favoriteItems, product]);

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
              <Components.StyledFullScreenIcon />
              <FullScreenImage src={product.thumbnail} alt={product.title} />
            </Components.ImageContainer>
            <Components.Description>
              {product.description}
            </Components.Description>
            <Components.DimensionList>
              <Components.DimensionItem>
                Width: {product.dimensions.width} cm
              </Components.DimensionItem>
              <Components.DimensionItem>
                Height: {product.dimensions.height} cm
              </Components.DimensionItem>
              <Components.DimensionItem>
                Depth: {product.dimensions.depth} cm
              </Components.DimensionItem>
              <Components.DimensionItem>
                Weight: {product.weight} kg
              </Components.DimensionItem>
            </Components.DimensionList>
          </Components.LeftWrapper>
          <Components.RightWrapper>
            <Components.StarAndReviewsWrapper>
              <StarRating rating={product.rating} />
              <ReviewsCarousel reviews={product.reviews} />
            </Components.StarAndReviewsWrapper>
            <Components.ActionsWrapper>
              <AddToCartButton onClick={handleAddToCart} />
              <AddToFavoritesButton
                onClick={handleAddToFavorites}
                isFavorite={isFavorite}
              />
            </Components.ActionsWrapper>
          </Components.RightWrapper>
        </>
      )}
    </Components.Container>
  );
};

export default ProductDetails;
