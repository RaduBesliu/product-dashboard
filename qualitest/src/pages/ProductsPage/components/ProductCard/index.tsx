import { useDispatch } from "react-redux";
import StarRating from "../StarRating";
import { Components } from "./styled";
import { AppDispatch } from "../../../../store";
import { ProductDto } from "../../../../api/types.dto";
import { setProductDetails } from "../../../../store/productDetailsSlice";

const ProductCard = ({ product }: { product: ProductDto }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onProductClick = () => {
    dispatch(setProductDetails(product));
  };

  return (
    <Components.Container onClick={onProductClick}>
      <Components.Thumbnail src={product.thumbnail} alt={product.title} />
      <Components.Details>
        <Components.TopWrapper>
          <h3>{product.title}</h3>
          <Components.CostContainer>
            <p>${product.price}</p>
            <p>-{product.discountPercentage}%</p>
          </Components.CostContainer>
        </Components.TopWrapper>
        <p>{product.description}</p>
        <StarRating rating={product.rating} />
      </Components.Details>
    </Components.Container>
  );
};

export default ProductCard;
