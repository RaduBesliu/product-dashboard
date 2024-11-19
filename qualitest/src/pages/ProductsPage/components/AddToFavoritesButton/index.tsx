import { Components } from "./styled";

const AddToFavoritesButton = ({
  onClick,
  isFavorite,
}: {
  onClick: (e: React.MouseEvent) => void;
  isFavorite: boolean;
}) => {
  return (
    <Components.Container onClick={onClick}>
      <Components.StyledStarIcon $isFavorite={isFavorite} />
    </Components.Container>
  );
};

export default AddToFavoritesButton;
