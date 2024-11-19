import { useDispatch } from "react-redux";
import {
  CartItem,
  removeFromCart,
  updateQuantity,
} from "../../../../../../../../../../store/cartSlice";
import { AppDispatch } from "../../../../../../../../../../store";
import { Components } from "./styled";

const CartProduct = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch<AppDispatch>();

  const removeItemFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  const incrementQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decrementQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  return (
    <Components.Container>
      <Components.ItemWrapper>
        <Components.Image src={item.thumbnail} alt={""} />
        <Components.Description>
          <Components.Paragraph>{item.title}</Components.Paragraph>
          <Components.Paragraph>Quantity: {item.quantity}</Components.Paragraph>
          <Components.Paragraph>Price: ${item.price}</Components.Paragraph>
          <Components.Paragraph>
            Total Price: ${(item.price * item.quantity).toFixed(2)}
          </Components.Paragraph>
        </Components.Description>
      </Components.ItemWrapper>
      <Components.ButtonsWrapper>
        <Components.Button onClick={removeItemFromCart}>
          Remove
        </Components.Button>
        <Components.Button onClick={incrementQuantity}>+</Components.Button>
        <Components.Button onClick={decrementQuantity}>-</Components.Button>
      </Components.ButtonsWrapper>
    </Components.Container>
  );
};

export default CartProduct;
