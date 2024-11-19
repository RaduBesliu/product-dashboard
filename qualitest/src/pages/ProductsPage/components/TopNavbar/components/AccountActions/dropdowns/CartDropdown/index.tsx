import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../../../../../../../store/selectors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Components } from "./styled";
import CartProduct from "./components/CartItem";
import { modalStyles } from "../styled";

Modal.setAppElement("#root");

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <Components.ModalButton onClick={openModal} aria-label="Cart">
        <ShoppingCartIcon />
      </Components.ModalButton>

      <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
        <Components.Container>
          <Components.CartTitle>Your Cart</Components.CartTitle>
          {!cartItems.length ? (
            <Components.Paragraph>No items in cart</Components.Paragraph>
          ) : (
            <Components.ItemsContainer>
              {cartItems.map((item) => (
                <CartProduct key={item.id} item={item} />
              ))}
            </Components.ItemsContainer>
          )}
          <Components.Total>Total: ${cartTotal.toFixed(2)}</Components.Total>
        </Components.Container>
      </Modal>
    </div>
  );
};

export default CartDropdown;
