import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../../../../../../../store/selectors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoritesItem from "./components/FavoritesItem";
import { modalStyles } from "../styled";
import { Components } from "./styled";
import { COLORS } from "../../../../../../../../utils";

Modal.setAppElement("#root");

const FavoritesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const favorites = useSelector(selectFavorites);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Components.Container>
      <Components.ModalButton onClick={openModal} aria-label="Favorites">
        <StarBorderIcon
          sx={{
            color: COLORS.white,
          }}
        />
      </Components.ModalButton>

      <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyles}>
        <Components.FavoritesTitle>Your Favorites</Components.FavoritesTitle>
        <Components.ItemsContainer>
          {favorites.length === 0 ? (
            <Components.Paragraph>No favorites</Components.Paragraph>
          ) : (
            favorites.map((item) => <FavoritesItem key={item.id} item={item} />)
          )}
        </Components.ItemsContainer>
      </Modal>
    </Components.Container>
  );
};

export default FavoritesDropdown;
