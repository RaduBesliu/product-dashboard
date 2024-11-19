import { Components } from "./styled";

const AddToCartButton = ({
  onClick,
}: {
  onClick: (e: React.MouseEvent) => void;
}) => {
  return (
    <Components.Container onClick={onClick} aria-label="Add to cart">
      Add to cart
    </Components.Container>
  );
};

export default AddToCartButton;
