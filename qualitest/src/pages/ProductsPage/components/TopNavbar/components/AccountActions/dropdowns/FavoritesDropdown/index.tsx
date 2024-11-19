import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../../../../../../../store/selectors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

Modal.setAppElement("#root");

const FavoritesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const favorites = useSelector(selectFavorites);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>
        <StarBorderIcon />
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "transparent",
          },
          content: {
            top: "50px", // Position near trigger
            right: "20px",
            left: "auto",
            bottom: "auto",
            width: "300px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            overflow: "auto",
          },
        }}
      >
        <div>
          <h3>Your Favorites</h3>
          {favorites.length === 0 ? (
            <p>No favorites</p>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                style={{ display: "flex", marginBottom: "10px" }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  width="50"
                  style={{ marginRight: "10px" }}
                />
                <div>
                  <p>{item.title}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </Modal>
    </div>
  );
};

export default FavoritesDropdown;
