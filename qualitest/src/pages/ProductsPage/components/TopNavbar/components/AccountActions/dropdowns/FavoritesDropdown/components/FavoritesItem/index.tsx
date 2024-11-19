import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../../../../../../../../../store/favoritesSlice";
import { AppDispatch } from "../../../../../../../../../../store";
import { Components } from "./styled";
import { ProductDto } from "../../../../../../../../../../api/types.dto";

const FavoritesItem = ({ item }: { item: ProductDto }) => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleItemFavorite = () => {
    dispatch(toggleFavorite(item));
  };

  return (
    <Components.Container>
      <Components.ItemWrapper>
        <Components.Image src={item.thumbnail} alt={""} />
        <Components.Paragraph>{item.title}</Components.Paragraph>
      </Components.ItemWrapper>
      <Components.Button onClick={toggleItemFavorite} danger>
        Remove
      </Components.Button>
    </Components.Container>
  );
};

export default FavoritesItem;
