import { useDispatch, useSelector } from "react-redux";
import StarRating from "../StarRating";
import { Components } from "./styled";
import { AppDispatch } from "../../../../store";
import { ProductDto } from "../../../../api/types.dto";
import { setProductDetails } from "../../../../store/productDetailsSlice";
import AddToCartButton from "../AddToCardButton";
import AddToFavoritesButton from "../AddToFavoritesButton";
import { addToCart } from "../../../../store/cartSlice";
import { toggleFavorite } from "../../../../store/favoritesSlice";
import { selectCartItems, selectFavorites } from "../../../../store/selectors";
import { useMemo } from "react";

const ProductCard = ({ product }: { product: ProductDto }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector(selectCartItems);
  const favoriteItems = useSelector(selectFavorites);

  const onProductClick = () => {
    dispatch(setProductDetails(product));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatch(addToCart(product));

    if (favoriteItems.find((item) => item.id === product.id)) {
      dispatch(toggleFavorite(product));
    }
  };

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!cartItems.find((item) => item.id === product.id)) {
      dispatch(toggleFavorite(product));
    }
  };

  const isFavorite = useMemo(() => {
    return !!favoriteItems.find((item) => item.id === product.id);
  }, [favoriteItems]);

  return (
    <Components.Container onClick={onProductClick}>
      <Components.Thumbnail src={product?.thumbnail} alt={""} />
      {/* empty because title is nearby */}
      <Components.Details>
        <Components.TopWrapper>
          <Components.Title>{product?.title}</Components.Title>
          <Components.CostContainer>
            <Components.Price>${product?.price?.toFixed(2)}</Components.Price>
            <Components.DiscountPercentage>
              -{product?.discountPercentage?.toFixed(2)}%
            </Components.DiscountPercentage>
          </Components.CostContainer>
        </Components.TopWrapper>
        <Components.Description>{product?.description}</Components.Description>
        <Components.BottomWrapper>
          <StarRating rating={product?.rating} />
          <Components.ActionsWrapper>
            <AddToCartButton onClick={handleAddToCart} />
            <AddToFavoritesButton
              onClick={handleAddToFavorites}
              isFavorite={isFavorite}
            />
          </Components.ActionsWrapper>
        </Components.BottomWrapper>
      </Components.Details>
    </Components.Container>
  );
};

export default ProductCard;
