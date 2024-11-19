import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../../../../../../../store/selectors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Components, cartModalStyles } from "./styled";
import CartProduct from "./components/CartItem";

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

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={cartModalStyles}
      >
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
          <Components.Paragraph>
            Total: ${cartTotal.toFixed(2)}
          </Components.Paragraph>
        </Components.Container>
      </Modal>
    </div>
  );
};

export default CartDropdown;
