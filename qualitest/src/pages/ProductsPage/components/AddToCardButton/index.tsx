import { Components } from "./styled";

const AddToCartButton = ({
  onClick,
}: {
  onClick: (e: React.MouseEvent) => void;
}) => {
  return (
    <Components.Container onClick={onClick}>Add to cart</Components.Container>
  );
};

export default AddToCartButton;
